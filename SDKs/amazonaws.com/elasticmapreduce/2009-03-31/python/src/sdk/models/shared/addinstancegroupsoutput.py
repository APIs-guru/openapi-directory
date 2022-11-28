from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AddInstanceGroupsOutput:
    r"""AddInstanceGroupsOutput
    Output from an AddInstanceGroups call.
    """
    
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterArn') }})
    instance_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceGroupIds') }})
    job_flow_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobFlowId') }})
    
