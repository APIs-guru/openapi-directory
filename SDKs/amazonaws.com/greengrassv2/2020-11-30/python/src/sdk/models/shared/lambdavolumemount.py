from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LambdaVolumeMount:
    r"""LambdaVolumeMount
    Contains information about a volume that Linux processes in a container can access. When you define a volume, the IoT Greengrass Core software mounts the source files to the destination inside the container.
    """
    
    destination_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationPath') }})
    source_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePath') }})
    add_group_owner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addGroupOwner') }})
    permission: Optional[LambdaFilesystemPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    
