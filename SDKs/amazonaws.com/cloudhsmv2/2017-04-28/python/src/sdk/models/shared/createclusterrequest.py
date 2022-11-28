from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateClusterRequest:
    hsm_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmType') }})
    subnet_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    backup_retention_policy: Optional[BackupRetentionPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupRetentionPolicy') }})
    source_backup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceBackupId') }})
    tag_list: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagList') }})
    
