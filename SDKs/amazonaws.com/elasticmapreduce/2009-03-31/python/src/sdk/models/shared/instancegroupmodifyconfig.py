from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceGroupModifyConfig:
    r"""InstanceGroupModifyConfig
    Modify the size or configurations of an instance group.
    """
    
    instance_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceGroupId') }})
    configurations: Optional[List[Configuration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configurations') }})
    ec2_instance_ids_to_terminate: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2InstanceIdsToTerminate') }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceCount') }})
    shrink_policy: Optional[ShrinkPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShrinkPolicy') }})
    
