from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateAssessmentTargetResponse:
    assessment_target_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentTargetArn' }})
    
