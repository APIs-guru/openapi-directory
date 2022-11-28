from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddInstanceGroupsInput:
    r"""AddInstanceGroupsInput
    Input to an AddInstanceGroups call.
    """
    
    instance_groups: List[InstanceGroupConfig] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceGroups') }})
    job_flow_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobFlowId') }})
    
