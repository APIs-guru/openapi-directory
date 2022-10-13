from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import auditcheckdetails
from . import taskstatistics
from . import audittaskstatus_enum
from . import audittasktype_enum


@dataclass_json
@dataclass
class DescribeAuditTaskResponse:
    audit_details: Optional[dict[str, auditcheckdetails.AuditCheckDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditDetails' }})
    scheduled_audit_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledAuditName' }})
    task_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    task_statistics: Optional[taskstatistics.TaskStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStatistics' }})
    task_status: Optional[audittaskstatus_enum.AuditTaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStatus' }})
    task_type: Optional[audittasktype_enum.AuditTaskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskType' }})
    
