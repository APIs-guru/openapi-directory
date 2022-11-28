from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AutoScalingTargetTrackingScalingPolicyConfigurationUpdate:
    r"""AutoScalingTargetTrackingScalingPolicyConfigurationUpdate
    Represents the settings of a target tracking scaling policy that will be modified.
    """
    
    target_value: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetValue') }})
    disable_scale_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableScaleIn') }})
    scale_in_cooldown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScaleInCooldown') }})
    scale_out_cooldown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScaleOutCooldown') }})
    
