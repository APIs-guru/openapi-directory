from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import assessmentcontrol


@dataclass_json
@dataclass
class UpdateAssessmentControlResponse:
    control: Optional[assessmentcontrol.AssessmentControl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'control' }})
    
