from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualgatewayref


@dataclass_json
@dataclass
class ListVirtualGatewaysOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    virtual_gateways: List[virtualgatewayref.VirtualGatewayRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualGateways' }})
    
