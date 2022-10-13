from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import permission_enum


@dataclass_json
@dataclass
class ResourceDownloadOwnerSetting:
    group_owner: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupOwner' }})
    group_permission: permission_enum.PermissionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupPermission' }})
    
