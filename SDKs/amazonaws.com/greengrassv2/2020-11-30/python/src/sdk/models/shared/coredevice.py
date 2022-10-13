from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import coredevicestatus_enum


@dataclass_json
@dataclass
class CoreDevice:
    core_device_thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coreDeviceThingName' }})
    last_status_update_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStatusUpdateTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[coredevicestatus_enum.CoreDeviceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
