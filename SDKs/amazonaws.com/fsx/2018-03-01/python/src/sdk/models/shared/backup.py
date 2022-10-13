from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import activedirectorybackupattributes
from . import backupfailuredetails
from . import filesystem
from . import backuplifecycle_enum
from . import resourcetype_enum
from . import tag
from . import backuptype_enum
from . import volume


@dataclass_json
@dataclass
class Backup:
    backup_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupId' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    directory_information: Optional[activedirectorybackupattributes.ActiveDirectoryBackupAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryInformation' }})
    failure_details: Optional[backupfailuredetails.BackupFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureDetails' }})
    file_system: filesystem.FileSystem = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystem' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    lifecycle: backuplifecycle_enum.BackupLifecycleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lifecycle' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerId' }})
    progress_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgressPercent' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceARN' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    source_backup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceBackupId' }})
    source_backup_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceBackupRegion' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    type: backuptype_enum.BackupTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    volume: Optional[volume.Volume] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Volume' }})
    
