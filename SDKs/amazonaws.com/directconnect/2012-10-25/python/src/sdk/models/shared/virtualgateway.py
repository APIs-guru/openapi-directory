from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VirtualGateway:
    virtual_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualGatewayId' }})
    virtual_gateway_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualGatewayState' }})
    
