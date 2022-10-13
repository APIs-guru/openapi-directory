from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import mitigationaction
from . import auditmitigationactionstasktarget
from . import taskstatisticsforauditcheck
from . import auditmitigationactionstaskstatus_enum


@dataclass_json
@dataclass
class DescribeAuditMitigationActionsTaskResponse:
    actions_definition: Optional[List[mitigationaction.MitigationAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionsDefinition' }})
    audit_check_to_actions_mapping: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditCheckToActionsMapping' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    target: Optional[auditmitigationactionstasktarget.AuditMitigationActionsTaskTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    task_statistics: Optional[dict[str, taskstatisticsforauditcheck.TaskStatisticsForAuditCheck]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStatistics' }})
    task_status: Optional[auditmitigationactionstaskstatus_enum.AuditMitigationActionsTaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStatus' }})
    
