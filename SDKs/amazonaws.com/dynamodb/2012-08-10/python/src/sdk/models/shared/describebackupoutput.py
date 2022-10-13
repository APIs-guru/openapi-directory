from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import backupdescription


@dataclass_json
@dataclass
class DescribeBackupOutput:
    backup_description: Optional[backupdescription.BackupDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupDescription' }})
    
