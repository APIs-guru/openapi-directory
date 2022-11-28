from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateAssessmentTargetRequest:
    assessment_target_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTargetName') }})
    resource_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceGroupArn') }})
    
