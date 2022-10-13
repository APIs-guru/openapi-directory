from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assessmentrunfilter


@dataclass_json
@dataclass
class ListAssessmentRunsRequest:
    assessment_template_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentTemplateArns' }})
    filter: Optional[assessmentrunfilter.AssessmentRunFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
