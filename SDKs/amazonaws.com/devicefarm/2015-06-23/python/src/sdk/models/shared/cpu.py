from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CPU:
    r"""CPU
    Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide CPU usage.
    """
    
    architecture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('architecture') }})
    clock: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clock') }})
    frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    
