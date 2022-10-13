from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assessmenttemplatefilter


@dataclass_json
@dataclass
class ListAssessmentTemplatesRequest:
    assessment_target_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentTargetArns' }})
    filter: Optional[assessmenttemplatefilter.AssessmentTemplateFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
