from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datapullmode_enum


@dataclass_json
@dataclass
class ScheduledTriggerProperties:
    data_pull_mode: Optional[datapullmode_enum.DataPullModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataPullMode' }})
    first_execution_from: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstExecutionFrom', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schedule_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduleEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schedule_expression: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduleExpression' }})
    schedule_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduleOffset' }})
    schedule_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduleStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timezone' }})
    
