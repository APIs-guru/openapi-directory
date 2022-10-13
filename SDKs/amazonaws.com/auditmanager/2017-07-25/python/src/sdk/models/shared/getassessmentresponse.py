from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import assessment
from . import role


@dataclass_json
@dataclass
class GetAssessmentResponse:
    assessment: Optional[assessment.Assessment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessment' }})
    user_role: Optional[role.Role] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRole' }})
    
