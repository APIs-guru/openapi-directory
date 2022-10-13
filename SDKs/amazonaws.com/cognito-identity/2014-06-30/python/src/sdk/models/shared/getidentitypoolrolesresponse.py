from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import rolemapping


@dataclass_json
@dataclass
class GetIdentityPoolRolesResponse:
    identity_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolId' }})
    role_mappings: Optional[dict[str, rolemapping.RoleMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleMappings' }})
    roles: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Roles' }})
    
