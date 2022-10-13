from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import assessmenttemplate
from . import faileditemdetails


@dataclass_json
@dataclass
class DescribeAssessmentTemplatesResponse:
    assessment_templates: List[assessmenttemplate.AssessmentTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentTemplates' }})
    failed_items: dict[str, faileditemdetails.FailedItemDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedItems' }})
    
