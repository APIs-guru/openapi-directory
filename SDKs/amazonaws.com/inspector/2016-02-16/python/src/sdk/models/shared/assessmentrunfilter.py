from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssessmentRunFilter:
    r"""AssessmentRunFilter
    Used as the request parameter in the <a>ListAssessmentRuns</a> action.
    """
    
    completion_time_range: Optional[TimestampRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionTimeRange') }})
    duration_range: Optional[DurationRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationRange') }})
    name_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namePattern') }})
    rules_package_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesPackageArns') }})
    start_time_range: Optional[TimestampRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeRange') }})
    state_change_time_range: Optional[TimestampRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChangeTimeRange') }})
    states: Optional[List[AssessmentRunStateEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('states') }})
    
