from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScalingAction:
    r"""ScalingAction
    The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.
    """
    
    simple_scaling_policy_configuration: SimpleScalingPolicyConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SimpleScalingPolicyConfiguration') }})
    market: Optional[MarketTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Market') }})
    
