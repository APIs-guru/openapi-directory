from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import executionstatus_enum


@dataclass_json
@dataclass
class ExecutionDetails:
    most_recent_execution_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mostRecentExecutionMessage' }})
    most_recent_execution_status: Optional[executionstatus_enum.ExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mostRecentExecutionStatus' }})
    most_recent_execution_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mostRecentExecutionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
