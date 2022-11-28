from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeviceSelectionResult:
    r"""DeviceSelectionResult
    Contains the run results requested by the device selection configuration and how many devices were returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>.
    """
    
    filters: Optional[List[DeviceFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    matched_devices_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedDevicesCount') }})
    max_devices: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDevices') }})
    
