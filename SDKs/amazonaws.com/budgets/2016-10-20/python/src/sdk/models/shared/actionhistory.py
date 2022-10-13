from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum
from dataclasses_json import dataclass_json
from . import actionhistorydetails
from . import eventtype_enum
from . import actionstatus_enum


@dataclass_json
@dataclass
class ActionHistory:
    action_history_details: actionhistorydetails.ActionHistoryDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionHistoryDetails' }})
    event_type: eventtype_enum.EventTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventType' }})
    status: actionstatus_enum.ActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
