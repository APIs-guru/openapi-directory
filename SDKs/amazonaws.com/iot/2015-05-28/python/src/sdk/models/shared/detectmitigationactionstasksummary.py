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
class DetectMitigationActionsTaskSummary:
    r"""DetectMitigationActionsTaskSummary
     The summary of the mitigation action tasks. 
    """
    
    actions_definition: Optional[List[MitigationAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionsDefinition') }})
    only_active_violations_included: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onlyActiveViolationsIncluded') }})
    suppressed_alerts_included: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suppressedAlertsIncluded') }})
    target: Optional[DetectMitigationActionsTaskTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    task_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    task_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    task_statistics: Optional[DetectMitigationActionsTaskStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatistics') }})
    task_status: Optional[DetectMitigationActionsTaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatus') }})
    violation_event_occurrence_range: Optional[ViolationEventOccurrenceRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationEventOccurrenceRange') }})
    
