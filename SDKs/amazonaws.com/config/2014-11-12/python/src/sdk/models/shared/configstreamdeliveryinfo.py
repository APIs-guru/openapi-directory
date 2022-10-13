from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deliverystatus_enum


@dataclass_json
@dataclass
class ConfigStreamDeliveryInfo:
    last_error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastErrorCode' }})
    last_error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastErrorMessage' }})
    last_status: Optional[deliverystatus_enum.DeliveryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStatus' }})
    last_status_change_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStatusChangeTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
