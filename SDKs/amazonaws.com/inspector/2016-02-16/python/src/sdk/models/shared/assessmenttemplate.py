from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attribute


@dataclass_json
@dataclass
class AssessmentTemplate:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    assessment_run_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentRunCount' }})
    assessment_target_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentTargetArn' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationInSeconds' }})
    last_assessment_run_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAssessmentRunArn' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rules_package_arns: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesPackageArns' }})
    user_attributes_for_findings: List[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAttributesForFindings' }})
    
