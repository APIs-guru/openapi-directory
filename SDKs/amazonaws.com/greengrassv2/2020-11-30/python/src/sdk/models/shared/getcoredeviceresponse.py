from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import coredevicestatus_enum


@dataclass_json
@dataclass
class GetCoreDeviceResponse:
    architecture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'architecture' }})
    core_device_thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coreDeviceThingName' }})
    core_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coreVersion' }})
    last_status_update_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStatusUpdateTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    status: Optional[coredevicestatus_enum.CoreDeviceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
