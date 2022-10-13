from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import executionresult
from . import executionstatus_enum


@dataclass_json
@dataclass
class ExecutionRecord:
    data_pull_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataPullEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_pull_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataPullStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionId' }})
    execution_result: Optional[executionresult.ExecutionResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionResult' }})
    execution_status: Optional[executionstatus_enum.ExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStatus' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
