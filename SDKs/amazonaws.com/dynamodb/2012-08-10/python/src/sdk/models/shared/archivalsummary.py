from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ArchivalSummary:
    archival_backup_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchivalBackupArn' }})
    archival_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchivalDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    archival_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchivalReason' }})
    
