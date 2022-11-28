from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TargetTrackingScalingPolicyConfiguration:
    r"""TargetTrackingScalingPolicyConfiguration
    Represents a target tracking scaling policy configuration to use with Application Auto Scaling.
    """
    
    target_value: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetValue') }})
    customized_metric_specification: Optional[CustomizedMetricSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomizedMetricSpecification') }})
    disable_scale_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableScaleIn') }})
    predefined_metric_specification: Optional[PredefinedMetricSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredefinedMetricSpecification') }})
    scale_in_cooldown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScaleInCooldown') }})
    scale_out_cooldown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScaleOutCooldown') }})
    
