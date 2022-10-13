from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lambdafilesystempermission_enum


@dataclass_json
@dataclass
class LambdaVolumeMount:
    add_group_owner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addGroupOwner' }})
    destination_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationPath' }})
    permission: Optional[lambdafilesystempermission_enum.LambdaFilesystemPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    source_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourcePath' }})
    
