from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import grantee
from . import permission_enum


@dataclass_json
@dataclass
class Grant:
    grantee: Optional[grantee.Grantee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Grantee' }})
    permission: Optional[permission_enum.PermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permission' }})
    
