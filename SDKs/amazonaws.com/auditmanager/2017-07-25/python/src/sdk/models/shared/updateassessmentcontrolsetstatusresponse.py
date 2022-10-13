from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import assessmentcontrolset


@dataclass_json
@dataclass
class UpdateAssessmentControlSetStatusResponse:
    control_set: Optional[assessmentcontrolset.AssessmentControlSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlSet' }})
    
