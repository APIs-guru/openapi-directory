from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attribute


@dataclass_json
@dataclass
class CreateAssessmentTemplateRequest:
    assessment_target_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentTargetArn' }})
    assessment_template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentTemplateName' }})
    duration_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationInSeconds' }})
    rules_package_arns: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesPackageArns' }})
    user_attributes_for_findings: Optional[List[attribute.Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAttributesForFindings' }})
    
