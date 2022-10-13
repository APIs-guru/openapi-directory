from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GatewayRouteVirtualService:
    virtual_service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualServiceName' }})
    
