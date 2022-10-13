from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import assessmenttarget
from . import faileditemdetails


@dataclass_json
@dataclass
class DescribeAssessmentTargetsResponse:
    assessment_targets: List[assessmenttarget.AssessmentTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentTargets' }})
    failed_items: dict[str, faileditemdetails.FailedItemDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedItems' }})
    
