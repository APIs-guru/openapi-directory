from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoScalingSettingsDescription:
    r"""AutoScalingSettingsDescription
    Represents the auto scaling settings for a global table or global secondary index.
    """
    
    auto_scaling_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingDisabled') }})
    auto_scaling_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingRoleArn') }})
    maximum_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumUnits') }})
    minimum_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumUnits') }})
    scaling_policies: Optional[List[AutoScalingPolicyDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPolicies') }})
    
