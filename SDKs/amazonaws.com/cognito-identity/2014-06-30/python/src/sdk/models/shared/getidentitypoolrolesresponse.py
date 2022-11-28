from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetIdentityPoolRolesResponse:
    r"""GetIdentityPoolRolesResponse
    Returned in response to a successful <code>GetIdentityPoolRoles</code> operation.
    """
    
    identity_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    role_mappings: Optional[dict[str, RoleMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleMappings') }})
    roles: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Roles') }})
    
