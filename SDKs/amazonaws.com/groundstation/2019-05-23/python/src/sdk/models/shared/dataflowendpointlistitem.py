from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DataflowEndpointListItem:
    r"""DataflowEndpointListItem
    Item in a list of <code>DataflowEndpoint</code> groups.
    """
    
    dataflow_endpoint_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowEndpointGroupArn') }})
    dataflow_endpoint_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowEndpointGroupId') }})
    
