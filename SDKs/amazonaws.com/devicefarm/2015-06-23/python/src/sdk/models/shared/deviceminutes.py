from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceMinutes:
    r"""DeviceMinutes
    Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children.
    """
    
    metered: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metered') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    unmetered: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unmetered') }})
    
