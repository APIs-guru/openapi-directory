from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import recorderstatus_enum


@dataclass_json
@dataclass
class ConfigurationRecorderStatus:
    last_error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastErrorCode' }})
    last_error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastErrorMessage' }})
    last_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_status: Optional[recorderstatus_enum.RecorderStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStatus' }})
    last_status_change_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStatusChangeTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_stop_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStopTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    recording: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recording' }})
    
