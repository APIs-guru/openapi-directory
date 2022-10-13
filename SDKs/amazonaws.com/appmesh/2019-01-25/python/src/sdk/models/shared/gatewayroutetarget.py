from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import gatewayroutevirtualservice


@dataclass_json
@dataclass
class GatewayRouteTarget:
    virtual_service: gatewayroutevirtualservice.GatewayRouteVirtualService = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualService' }})
    
