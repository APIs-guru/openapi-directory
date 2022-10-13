from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import jobflowexecutionstate_enum


@dataclass_json
@dataclass
class JobFlowExecutionStatusDetail:
    creation_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_state_change_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastStateChangeReason' }})
    ready_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadyDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: jobflowexecutionstate_enum.JobFlowExecutionStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
