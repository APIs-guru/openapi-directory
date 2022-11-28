from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAuditTaskResponse:
    audit_details: Optional[dict[str, AuditCheckDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditDetails') }})
    scheduled_audit_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledAuditName') }})
    task_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    task_statistics: Optional[TaskStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatistics') }})
    task_status: Optional[AuditTaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatus') }})
    task_type: Optional[AuditTaskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskType') }})
    
