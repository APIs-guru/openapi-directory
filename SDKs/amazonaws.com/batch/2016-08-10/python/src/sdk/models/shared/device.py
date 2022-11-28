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
    <p>An object representing a container instance host device.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.</p> </note>
    """
    
    host_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostPath') }})
    container_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerPath') }})
    permissions: Optional[List[DeviceCgroupPermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
