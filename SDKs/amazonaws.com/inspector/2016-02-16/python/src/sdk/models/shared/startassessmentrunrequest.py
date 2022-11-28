from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartAssessmentRunRequest:
    assessment_template_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTemplateArn') }})
    assessment_run_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentRunName') }})
    
