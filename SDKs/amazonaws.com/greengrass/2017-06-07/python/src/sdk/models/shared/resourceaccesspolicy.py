from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import permission_enum


@dataclass_json
@dataclass
class ResourceAccessPolicy:
    permission: Optional[permission_enum.PermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permission' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    
