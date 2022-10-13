from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customroutingendpointgroup


@dataclass_json
@dataclass
class CreateCustomRoutingEndpointGroupResponse:
    endpoint_group: Optional[customroutingendpointgroup.CustomRoutingEndpointGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointGroup' }})
    
