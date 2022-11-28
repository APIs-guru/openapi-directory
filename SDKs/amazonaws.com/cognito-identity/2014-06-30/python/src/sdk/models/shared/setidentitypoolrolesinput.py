from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetIdentityPoolRolesInput:
    r"""SetIdentityPoolRolesInput
    Input to the <code>SetIdentityPoolRoles</code> action.
    """
    
    identity_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    roles: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Roles') }})
    role_mappings: Optional[dict[str, RoleMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleMappings') }})
    
