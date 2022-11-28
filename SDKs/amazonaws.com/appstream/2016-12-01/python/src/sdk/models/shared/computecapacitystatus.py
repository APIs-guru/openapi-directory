from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ComputeCapacityStatus:
    r"""ComputeCapacityStatus
    Describes the capacity status for a fleet.
    """
    
    desired: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Desired') }})
    available: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Available') }})
    in_use: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InUse') }})
    running: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Running') }})
    
