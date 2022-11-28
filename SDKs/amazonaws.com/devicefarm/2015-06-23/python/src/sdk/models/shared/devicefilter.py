from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeviceFilter:
    r"""DeviceFilter
    <p>Represents a device filter used to select a set of devices to be included in a test run. This data structure is passed in as the <code>deviceSelectionConfiguration</code> parameter to <code>ScheduleRun</code>. For an example of the JSON request syntax, see <a>ScheduleRun</a>.</p> <p>It is also passed in as the <code>filters</code> parameter to <code>ListDevices</code>. For an example of the JSON request syntax, see <a>ListDevices</a>.</p>
    """
    
    attribute: DeviceFilterAttributeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    operator: RuleOperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
