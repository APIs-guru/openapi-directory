from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import snapshotstatus_enum
from . import snapshottype_enum


@dataclass_json
@dataclass
class Snapshot:
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotId' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[snapshotstatus_enum.SnapshotStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    type: Optional[snapshottype_enum.SnapshotTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
