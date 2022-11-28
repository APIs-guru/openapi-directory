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
class ScheduledTriggerProperties:
    r"""ScheduledTriggerProperties
     Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type. 
    """
    
    schedule_expression: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleExpression') }})
    data_pull_mode: Optional[DataPullModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPullMode') }})
    first_execution_from: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstExecutionFrom'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schedule_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schedule_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleOffset') }})
    schedule_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    
