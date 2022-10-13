from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import action_enum
from . import permission_enum


@dataclass_json
@dataclass
class UserSetting:
    action: action_enum.ActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    permission: permission_enum.PermissionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permission' }})
    
