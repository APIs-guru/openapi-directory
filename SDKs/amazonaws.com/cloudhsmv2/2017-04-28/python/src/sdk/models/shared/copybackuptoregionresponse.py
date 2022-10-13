from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import destinationbackup


@dataclass_json
@dataclass
class CopyBackupToRegionResponse:
    destination_backup: Optional[destinationbackup.DestinationBackup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationBackup' }})
    
