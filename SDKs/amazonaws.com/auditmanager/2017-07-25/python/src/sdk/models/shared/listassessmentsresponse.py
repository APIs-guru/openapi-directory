from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assessmentmetadataitem


@dataclass_json
@dataclass
class ListAssessmentsResponse:
    assessment_metadata: Optional[List[assessmentmetadataitem.AssessmentMetadataItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentMetadata' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
