from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomRoutingEndpointGroup:
    r"""CustomRoutingEndpointGroup
    A complex type for the endpoint group for a custom routing accelerator. An AWS Region can have only one endpoint group for a specific listener. 
    """
    
    destination_descriptions: Optional[List[CustomRoutingDestinationDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationDescriptions') }})
    endpoint_descriptions: Optional[List[CustomRoutingEndpointDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointDescriptions') }})
    endpoint_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupArn') }})
    endpoint_group_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupRegion') }})
    
