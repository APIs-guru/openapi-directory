from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customizedmetricspecification
from . import predefinedmetricspecification


@dataclass_json
@dataclass
class TargetTrackingScalingPolicyConfiguration:
    customized_metric_specification: Optional[customizedmetricspecification.CustomizedMetricSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomizedMetricSpecification' }})
    disable_scale_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisableScaleIn' }})
    predefined_metric_specification: Optional[predefinedmetricspecification.PredefinedMetricSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredefinedMetricSpecification' }})
    scale_in_cooldown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScaleInCooldown' }})
    scale_out_cooldown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScaleOutCooldown' }})
    target_value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetValue' }})
    
