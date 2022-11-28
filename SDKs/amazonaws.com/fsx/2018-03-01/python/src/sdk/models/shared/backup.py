from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Backup:
    r"""Backup
    A backup of an Amazon FSx for Windows File Server or Amazon FSx for Lustre file system, or of an Amazon FSx for NetApp ONTAP volume.
    """
    
    backup_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupId') }})
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    file_system: FileSystem = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystem') }})
    lifecycle: BackupLifecycleEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lifecycle') }})
    type: BackupTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    directory_information: Optional[ActiveDirectoryBackupAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryInformation') }})
    failure_details: Optional[BackupFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureDetails') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    progress_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgressPercent') }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    resource_type: Optional[ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    source_backup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceBackupId') }})
    source_backup_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceBackupRegion') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    volume: Optional[Volume] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Volume') }})
    
