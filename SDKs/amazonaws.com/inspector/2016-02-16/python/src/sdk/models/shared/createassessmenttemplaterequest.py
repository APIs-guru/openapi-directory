from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateAssessmentTemplateRequest:
    assessment_target_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTargetArn') }})
    assessment_template_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTemplateName') }})
    duration_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationInSeconds') }})
    rules_package_arns: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesPackageArns') }})
    user_attributes_for_findings: Optional[List[Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAttributesForFindings') }})
    
