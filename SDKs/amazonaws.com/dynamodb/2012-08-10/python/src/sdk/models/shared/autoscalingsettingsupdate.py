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
class AutoScalingSettingsUpdate:
    r"""AutoScalingSettingsUpdate
    Represents the auto scaling settings to be modified for a global table or global secondary index.
    """
    
    auto_scaling_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingDisabled') }})
    auto_scaling_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingRoleArn') }})
    maximum_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumUnits') }})
    minimum_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumUnits') }})
    scaling_policy_update: Optional[AutoScalingPolicyUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPolicyUpdate') }})
    
