from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class DeleteFileSystemWindowsResponse:
    final_backup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalBackupId' }})
    final_backup_tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalBackupTags' }})
    
