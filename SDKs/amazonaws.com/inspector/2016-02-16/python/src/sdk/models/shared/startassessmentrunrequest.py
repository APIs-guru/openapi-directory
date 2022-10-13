from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartAssessmentRunRequest:
    assessment_run_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentRunName' }})
    assessment_template_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentTemplateArn' }})
    
