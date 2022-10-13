from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualgateway


@dataclass_json
@dataclass
class VirtualGateways:
    virtual_gateways: Optional[List[virtualgateway.VirtualGateway]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualGateways' }})
    
