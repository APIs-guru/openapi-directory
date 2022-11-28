from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsJobExponentialRolloutRate:
    r"""AwsJobExponentialRolloutRate
    The rate of increase for a job rollout. This parameter allows you to define an exponential rate increase for a job rollout.
    """
    
    base_rate_per_minute: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseRatePerMinute') }})
    increment_factor: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incrementFactor') }})
    rate_increase_criteria: AwsJobRateIncreaseCriteria = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateIncreaseCriteria') }})
    
