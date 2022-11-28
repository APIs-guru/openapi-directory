from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAssessmentTargetsResponse:
    assessment_targets: List[AssessmentTarget] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTargets') }})
    failed_items: dict[str, FailedItemDetails] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedItems') }})
    
