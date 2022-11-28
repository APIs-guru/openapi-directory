from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AlarmModelSummary:
    r"""AlarmModelSummary
    Contains a summary of an alarm model.
    """
    
    alarm_model_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmModelDescription') }})
    alarm_model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmModelName') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
