from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LinuxParameters:
    r"""LinuxParameters
    Linux-specific modifications that are applied to the container, such as details for device mappings.
    """
    
    devices: Optional[List[Device]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    init_process_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initProcessEnabled') }})
    max_swap: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSwap') }})
    shared_memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedMemorySize') }})
    swappiness: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('swappiness') }})
    tmpfs: Optional[List[Tmpfs]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tmpfs') }})
    
