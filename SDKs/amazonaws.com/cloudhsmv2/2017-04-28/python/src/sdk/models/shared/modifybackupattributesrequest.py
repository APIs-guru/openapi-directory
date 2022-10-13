from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModifyBackupAttributesRequest:
    backup_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupId' }})
    never_expires: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NeverExpires' }})
    
