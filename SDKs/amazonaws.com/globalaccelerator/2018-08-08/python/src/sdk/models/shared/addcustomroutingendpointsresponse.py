from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddCustomRoutingEndpointsResponse:
    endpoint_descriptions: Optional[List[CustomRoutingEndpointDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointDescriptions') }})
    endpoint_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupArn') }})
    
