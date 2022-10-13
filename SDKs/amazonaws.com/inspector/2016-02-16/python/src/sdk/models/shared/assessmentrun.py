from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import assessmentrunnotification
from . import assessmentrunstate_enum
from . import assessmentrunstatechange
from . import attribute


@dataclass_json
@dataclass
class AssessmentRun:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    assessment_template_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentTemplateArn' }})
    completed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_collected: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataCollected' }})
    duration_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationInSeconds' }})
    finding_counts: dict[str, int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingCounts' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notifications: List[assessmentrunnotification.AssessmentRunNotification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications' }})
    rules_package_arns: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesPackageArns' }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: assessmentrunstate_enum.AssessmentRunStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_changed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateChangedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state_changes: List[assessmentrunstatechange.AssessmentRunStateChange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateChanges' }})
    user_attributes_for_findings: List[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAttributesForFindings' }})
    
