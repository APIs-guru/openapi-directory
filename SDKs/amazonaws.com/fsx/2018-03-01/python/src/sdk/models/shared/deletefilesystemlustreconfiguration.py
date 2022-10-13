from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class DeleteFileSystemLustreConfiguration:
    final_backup_tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalBackupTags' }})
    skip_final_backup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SkipFinalBackup' }})
    
