from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customizedscalingmetricspecification
from . import predefinedscalingmetricspecification


@dataclass_json
@dataclass
class TargetTrackingConfiguration:
    customized_scaling_metric_specification: Optional[customizedscalingmetricspecification.CustomizedScalingMetricSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomizedScalingMetricSpecification' }})
    disable_scale_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisableScaleIn' }})
    estimated_instance_warmup: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EstimatedInstanceWarmup' }})
    predefined_scaling_metric_specification: Optional[predefinedscalingmetricspecification.PredefinedScalingMetricSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredefinedScalingMetricSpecification' }})
    scale_in_cooldown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScaleInCooldown' }})
    scale_out_cooldown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScaleOutCooldown' }})
    target_value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetValue' }})
    
