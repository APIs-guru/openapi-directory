from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoScalingPolicyUpdate:
    r"""AutoScalingPolicyUpdate
    Represents the auto scaling policy to be modified.
    """
    
    target_tracking_scaling_policy_configuration: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTrackingScalingPolicyConfiguration') }})
    policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    
