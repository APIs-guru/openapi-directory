from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customroutingendpointdescription


@dataclass_json
@dataclass
class AddCustomRoutingEndpointsResponse:
    endpoint_descriptions: Optional[List[customroutingendpointdescription.CustomRoutingEndpointDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointDescriptions' }})
    endpoint_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointGroupArn' }})
    
