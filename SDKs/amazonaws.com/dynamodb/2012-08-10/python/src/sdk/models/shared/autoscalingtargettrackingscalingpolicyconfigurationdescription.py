from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AutoScalingTargetTrackingScalingPolicyConfigurationDescription:
    r"""AutoScalingTargetTrackingScalingPolicyConfigurationDescription
    Represents the properties of a target tracking scaling policy.
    """
    
    target_value: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetValue') }})
    disable_scale_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableScaleIn') }})
    scale_in_cooldown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScaleInCooldown') }})
    scale_out_cooldown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScaleOutCooldown') }})
    
