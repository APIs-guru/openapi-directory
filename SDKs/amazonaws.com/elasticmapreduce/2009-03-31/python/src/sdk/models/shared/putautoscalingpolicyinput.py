from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutAutoScalingPolicyInput:
    auto_scaling_policy: AutoScalingPolicy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingPolicy') }})
    cluster_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    instance_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceGroupId') }})
    
