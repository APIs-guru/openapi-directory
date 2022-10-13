from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import assessment


@dataclass_json
@dataclass
class CreateAssessmentResponse:
    assessment: Optional[assessment.Assessment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessment' }})
    
