from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsJobAbortCriteria:
    r"""AwsJobAbortCriteria
    The criteria that determine when and how a job abort takes place.
    """
    
    action: AwsJobAbortCriteriaAbortActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    failure_type: AwsJobAbortCriteriaFailureTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureType') }})
    min_number_of_executed_things: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minNumberOfExecutedThings') }})
    threshold_percentage: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdPercentage') }})
    
