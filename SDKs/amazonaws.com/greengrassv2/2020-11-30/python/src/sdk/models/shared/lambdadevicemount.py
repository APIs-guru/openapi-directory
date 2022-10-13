from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lambdafilesystempermission_enum


@dataclass_json
@dataclass
class LambdaDeviceMount:
    add_group_owner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addGroupOwner' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    permission: Optional[lambdafilesystempermission_enum.LambdaFilesystemPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    
