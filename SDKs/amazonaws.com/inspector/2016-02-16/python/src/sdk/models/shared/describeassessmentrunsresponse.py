from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import assessmentrun
from . import faileditemdetails


@dataclass_json
@dataclass
class DescribeAssessmentRunsResponse:
    assessment_runs: List[assessmentrun.AssessmentRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentRuns' }})
    failed_items: dict[str, faileditemdetails.FailedItemDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedItems' }})
    
