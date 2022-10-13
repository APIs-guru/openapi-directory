from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customroutingendpointgroup


@dataclass_json
@dataclass
class ListCustomRoutingEndpointGroupsResponse:
    endpoint_groups: Optional[List[customroutingendpointgroup.CustomRoutingEndpointGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointGroups' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
