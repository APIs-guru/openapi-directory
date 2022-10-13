from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import queryexecutionstate_enum


@dataclass_json
@dataclass
class QueryExecutionStatus:
    completion_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[queryexecutionstate_enum.QueryExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_change_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateChangeReason' }})
    submission_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubmissionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
