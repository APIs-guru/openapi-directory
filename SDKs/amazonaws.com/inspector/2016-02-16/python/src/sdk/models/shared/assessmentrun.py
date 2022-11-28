from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssessmentRun:
    r"""AssessmentRun
    <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p>
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    assessment_template_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTemplateArn') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_collected: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataCollected') }})
    duration_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationInSeconds') }})
    finding_counts: dict[str, int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingCounts') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notifications: List[AssessmentRunNotification] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    rules_package_arns: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesPackageArns') }})
    state: AssessmentRunStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_changed_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChangedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state_changes: List[AssessmentRunStateChange] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChanges') }})
    user_attributes_for_findings: List[Attribute] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAttributesForFindings') }})
    completed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
