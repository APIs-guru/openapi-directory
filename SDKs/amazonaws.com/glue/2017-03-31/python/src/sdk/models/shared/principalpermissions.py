from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import permission_enum
from . import datalakeprincipal


@dataclass_json
@dataclass
class PrincipalPermissions:
    permissions: Optional[List[permission_enum.PermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permissions' }})
    principal: Optional[datalakeprincipal.DataLakePrincipal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Principal' }})
    
