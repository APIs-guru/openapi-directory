from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import backupstatus_enum
from . import backuptype_enum


@dataclass_json
@dataclass
class BackupSummary:
    backup_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupArn' }})
    backup_creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupCreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    backup_expiry_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupExpiryDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    backup_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupName' }})
    backup_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupSizeBytes' }})
    backup_status: Optional[backupstatus_enum.BackupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupStatus' }})
    backup_type: Optional[backuptype_enum.BackupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupType' }})
    table_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableArn' }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableId' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
