from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import backupretentionpolicy


@dataclass_json
@dataclass
class ModifyClusterRequest:
    backup_retention_policy: backupretentionpolicy.BackupRetentionPolicy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupRetentionPolicy' }})
    cluster_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    
