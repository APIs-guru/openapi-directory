from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import archivestate_enum


@dataclass_json
@dataclass
class DescribeArchiveResponse:
    archive_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchiveArn' }})
    archive_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchiveName' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    event_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventCount' }})
    event_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventPattern' }})
    event_source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSourceArn' }})
    retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetentionDays' }})
    size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeBytes' }})
    state: Optional[archivestate_enum.ArchiveStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateReason' }})
    
