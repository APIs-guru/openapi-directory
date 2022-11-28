from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LambdaDeviceMount:
    r"""LambdaDeviceMount
    Contains information about a device that Linux processes in a container can access.
    """
    
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    add_group_owner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addGroupOwner') }})
    permission: Optional[LambdaFilesystemPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    
