from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionHistory:
    r"""ActionHistory
     The historical records for a budget action. 
    """
    
    action_history_details: ActionHistoryDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionHistoryDetails') }})
    event_type: EventTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventType') }})
    status: ActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
