from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributetype


@dataclass_json
@dataclass
class DeviceType:
    device_attributes: Optional[List[attributetype.AttributeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceAttributes' }})
    device_create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceCreateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    device_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceKey' }})
    device_last_authenticated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceLastAuthenticatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    device_last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceLastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
