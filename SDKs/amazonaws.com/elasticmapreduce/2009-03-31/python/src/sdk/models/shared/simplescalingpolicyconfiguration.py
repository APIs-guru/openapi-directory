from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SimpleScalingPolicyConfiguration:
    r"""SimpleScalingPolicyConfiguration
    An automatic scaling configuration, which describes how the policy adds or removes instances, the cooldown period, and the number of EC2 instances that will be added each time the CloudWatch metric alarm condition is satisfied.
    """
    
    scaling_adjustment: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingAdjustment') }})
    adjustment_type: Optional[AdjustmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdjustmentType') }})
    cool_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CoolDown') }})
    
