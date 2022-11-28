from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExponentialRolloutRate:
    r"""ExponentialRolloutRate
    Allows you to create an exponential rate of rollout for a job.
    """
    
    base_rate_per_minute: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseRatePerMinute') }})
    increment_factor: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incrementFactor') }})
    rate_increase_criteria: RateIncreaseCriteria = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateIncreaseCriteria') }})
    
