from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deliverystatus_enum


@dataclass_json
@dataclass
class ConfigExportDeliveryInfo:
    last_attempt_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAttemptTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastErrorCode' }})
    last_error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastErrorMessage' }})
    last_status: Optional[deliverystatus_enum.DeliveryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStatus' }})
    last_successful_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSuccessfulTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next_delivery_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextDeliveryTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
