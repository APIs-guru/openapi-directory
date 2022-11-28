from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoScalingPolicyDescription:
    r"""AutoScalingPolicyDescription
    Represents the properties of the scaling policy.
    """
    
    policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    target_tracking_scaling_policy_configuration: Optional[AutoScalingTargetTrackingScalingPolicyConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTrackingScalingPolicyConfiguration') }})
    
