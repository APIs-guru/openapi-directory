from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Device:
    r"""Device
    An object representing a container instance host device.
    """
    
    host_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostPath') }})
    container_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerPath') }})
    permissions: Optional[List[DeviceCgroupPermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
