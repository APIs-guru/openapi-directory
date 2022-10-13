from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import launchpermissionconfiguration


@dataclass_json
@dataclass
class AmiDistributionConfiguration:
    ami_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amiTags' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyId' }})
    launch_permission: Optional[launchpermissionconfiguration.LaunchPermissionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchPermission' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    target_account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetAccountIds' }})
    
