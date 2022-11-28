from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class APIModelsRolePermissionChangeActionEnum(str, Enum):
    GRANT = "Grant"
    REVOKE = "Revoke"


@dataclass_json
@dataclass
class APIModelsRolePermissionChange:
    r"""APIModelsRolePermissionChange
    Change to the Permissions that a Role is given.
    """
    
    action: APIModelsRolePermissionChangeActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }, 'form': { 'field_name': 'Action' }})
    permission: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permission') }, 'form': { 'field_name': 'Permission' }})
    
