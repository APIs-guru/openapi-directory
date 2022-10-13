from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import backupretentionpolicy
from . import tag


@dataclass_json
@dataclass
class CreateClusterRequest:
    backup_retention_policy: Optional[backupretentionpolicy.BackupRetentionPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupRetentionPolicy' }})
    hsm_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HsmType' }})
    source_backup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceBackupId' }})
    subnet_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    tag_list: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagList' }})
    
