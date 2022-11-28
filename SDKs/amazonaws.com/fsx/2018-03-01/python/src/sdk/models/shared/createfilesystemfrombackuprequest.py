from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFileSystemFromBackupRequest:
    r"""CreateFileSystemFromBackupRequest
    The request object for the <code>CreateFileSystemFromBackup</code> operation.
    """
    
    backup_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupId') }})
    subnet_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    lustre_configuration: Optional[CreateFileSystemLustreConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LustreConfiguration') }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    storage_type: Optional[StorageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageType') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    windows_configuration: Optional[CreateFileSystemWindowsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindowsConfiguration') }})
    
