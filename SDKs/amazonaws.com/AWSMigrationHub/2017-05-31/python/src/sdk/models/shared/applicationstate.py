from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import applicationstatus_enum


@dataclass_json
@dataclass
class ApplicationState:
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationId' }})
    application_status: Optional[applicationstatus_enum.ApplicationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationStatus' }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
