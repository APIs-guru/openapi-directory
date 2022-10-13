from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customroutingdestinationdescription
from . import customroutingendpointdescription


@dataclass_json
@dataclass
class CustomRoutingEndpointGroup:
    destination_descriptions: Optional[List[customroutingdestinationdescription.CustomRoutingDestinationDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationDescriptions' }})
    endpoint_descriptions: Optional[List[customroutingendpointdescription.CustomRoutingEndpointDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointDescriptions' }})
    endpoint_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointGroupArn' }})
    endpoint_group_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointGroupRegion' }})
    
