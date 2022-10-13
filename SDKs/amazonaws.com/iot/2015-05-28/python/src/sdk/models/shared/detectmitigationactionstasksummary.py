from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import mitigationaction
from . import detectmitigationactionstasktarget
from . import detectmitigationactionstaskstatistics
from . import detectmitigationactionstaskstatus_enum
from . import violationeventoccurrencerange


@dataclass_json
@dataclass
class DetectMitigationActionsTaskSummary:
    actions_definition: Optional[List[mitigationaction.MitigationAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionsDefinition' }})
    only_active_violations_included: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onlyActiveViolationsIncluded' }})
    suppressed_alerts_included: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suppressedAlertsIncluded' }})
    target: Optional[detectmitigationactionstasktarget.DetectMitigationActionsTaskTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    task_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    task_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    task_statistics: Optional[detectmitigationactionstaskstatistics.DetectMitigationActionsTaskStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStatistics' }})
    task_status: Optional[detectmitigationactionstaskstatus_enum.DetectMitigationActionsTaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStatus' }})
    violation_event_occurrence_range: Optional[violationeventoccurrencerange.ViolationEventOccurrenceRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violationEventOccurrenceRange' }})
    
