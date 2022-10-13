from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CopyBackupToRegionRequest:
    backup_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupId' }})
    destination_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationRegion' }})
    tag_list: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagList' }})
    
