from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TargetTrackingConfiguration:
    r"""TargetTrackingConfiguration
    Describes a target tracking configuration to use with AWS Auto Scaling. Used with <a>ScalingInstruction</a> and <a>ScalingPolicy</a>.
    """
    
    target_value: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetValue') }})
    customized_scaling_metric_specification: Optional[CustomizedScalingMetricSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomizedScalingMetricSpecification') }})
    disable_scale_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableScaleIn') }})
    estimated_instance_warmup: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EstimatedInstanceWarmup') }})
    predefined_scaling_metric_specification: Optional[PredefinedScalingMetricSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredefinedScalingMetricSpecification') }})
    scale_in_cooldown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScaleInCooldown') }})
    scale_out_cooldown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScaleOutCooldown') }})
    
