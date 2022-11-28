from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDevicePoolResult:
    r"""GetDevicePoolResult
    Represents the result of a get device pool request.
    """
    
    device_pool: Optional[DevicePool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePool') }})
    
