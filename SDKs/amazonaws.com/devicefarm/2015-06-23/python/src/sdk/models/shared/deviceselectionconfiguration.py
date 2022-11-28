from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeviceSelectionConfiguration:
    r"""DeviceSelectionConfiguration
    Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>.
    """
    
    filters: List[DeviceFilter] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    max_devices: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDevices') }})
    
