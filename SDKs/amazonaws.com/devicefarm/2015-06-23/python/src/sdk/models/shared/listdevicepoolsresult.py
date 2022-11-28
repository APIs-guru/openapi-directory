from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDevicePoolsResult:
    r"""ListDevicePoolsResult
    Represents the result of a list device pools request.
    """
    
    device_pools: Optional[List[DevicePool]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePools') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
