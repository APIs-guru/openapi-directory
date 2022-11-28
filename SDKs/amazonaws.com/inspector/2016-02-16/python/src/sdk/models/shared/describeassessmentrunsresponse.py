from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAssessmentRunsResponse:
    assessment_runs: List[AssessmentRun] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentRuns') }})
    failed_items: dict[str, FailedItemDetails] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedItems') }})
    
