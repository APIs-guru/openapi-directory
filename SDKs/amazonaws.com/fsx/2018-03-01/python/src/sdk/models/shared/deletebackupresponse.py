from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import backuplifecycle_enum


@dataclass_json
@dataclass
class DeleteBackupResponse:
    backup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupId' }})
    lifecycle: Optional[backuplifecycle_enum.BackupLifecycleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lifecycle' }})
    
