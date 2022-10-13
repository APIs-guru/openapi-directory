from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customroutingaccelerator


@dataclass_json
@dataclass
class ListCustomRoutingAcceleratorsResponse:
    accelerators: Optional[List[customroutingaccelerator.CustomRoutingAccelerator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Accelerators' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
