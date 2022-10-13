from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import stopaction_enum


@dataclass_json
@dataclass
class StopAssessmentRunRequest:
    assessment_run_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentRunArn' }})
    stop_action: Optional[stopaction_enum.StopActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopAction' }})
    
