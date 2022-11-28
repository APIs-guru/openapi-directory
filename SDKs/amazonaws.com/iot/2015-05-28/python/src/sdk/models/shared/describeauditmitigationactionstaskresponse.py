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
class DescribeAuditMitigationActionsTaskResponse:
    actions_definition: Optional[List[MitigationAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionsDefinition') }})
    audit_check_to_actions_mapping: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditCheckToActionsMapping') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    target: Optional[AuditMitigationActionsTaskTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    task_statistics: Optional[dict[str, TaskStatisticsForAuditCheck]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatistics') }})
    task_status: Optional[AuditMitigationActionsTaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatus') }})
    
