from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import backup


@dataclass_json
@dataclass
class CopyBackupResponse:
    backup: Optional[backup.Backup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Backup' }})
    
