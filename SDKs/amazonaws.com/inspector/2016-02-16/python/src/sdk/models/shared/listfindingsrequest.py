from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import findingfilter


@dataclass_json
@dataclass
class ListFindingsRequest:
    assessment_run_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentRunArns' }})
    filter: Optional[findingfilter.FindingFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
