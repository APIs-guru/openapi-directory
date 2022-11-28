from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDevicePoolCompatibilityResult:
    r"""GetDevicePoolCompatibilityResult
    Represents the result of describe device pool compatibility request.
    """
    
    compatible_devices: Optional[List[DevicePoolCompatibilityResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibleDevices') }})
    incompatible_devices: Optional[List[DevicePoolCompatibilityResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incompatibleDevices') }})
    
