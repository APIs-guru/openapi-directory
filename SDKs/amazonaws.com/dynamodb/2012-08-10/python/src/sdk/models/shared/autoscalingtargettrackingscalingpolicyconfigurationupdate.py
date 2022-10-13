from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AutoScalingTargetTrackingScalingPolicyConfigurationUpdate:
    disable_scale_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisableScaleIn' }})
    scale_in_cooldown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScaleInCooldown' }})
    scale_out_cooldown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScaleOutCooldown' }})
    target_value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetValue' }})
    
