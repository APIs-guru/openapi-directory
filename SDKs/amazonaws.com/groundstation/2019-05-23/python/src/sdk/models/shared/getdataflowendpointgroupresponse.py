from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDataflowEndpointGroupResponse:
    r"""GetDataflowEndpointGroupResponse
    <p/>
    """
    
    dataflow_endpoint_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowEndpointGroupArn') }})
    dataflow_endpoint_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowEndpointGroupId') }})
    endpoints_details: Optional[List[EndpointDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointsDetails') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
