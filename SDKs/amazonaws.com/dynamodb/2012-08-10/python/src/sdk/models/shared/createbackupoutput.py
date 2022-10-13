from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import backupdetails


@dataclass_json
@dataclass
class CreateBackupOutput:
    backup_details: Optional[backupdetails.BackupDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupDetails' }})
    
