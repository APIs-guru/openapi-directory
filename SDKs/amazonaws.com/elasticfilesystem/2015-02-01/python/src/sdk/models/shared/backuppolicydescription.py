from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import backuppolicy


@dataclass_json
@dataclass
class BackupPolicyDescription:
    backup_policy: Optional[backuppolicy.BackupPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupPolicy' }})
    
