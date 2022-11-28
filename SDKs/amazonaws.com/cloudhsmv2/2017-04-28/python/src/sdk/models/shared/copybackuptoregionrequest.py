from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CopyBackupToRegionRequest:
    backup_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupId') }})
    destination_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationRegion') }})
    tag_list: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagList') }})
    
