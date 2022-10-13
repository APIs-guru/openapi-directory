from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import operation_enum


@dataclass_json
@dataclass
class RecordPatch:
    device_last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceLastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    op: operation_enum.OperationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Op' }})
    sync_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncCount' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
