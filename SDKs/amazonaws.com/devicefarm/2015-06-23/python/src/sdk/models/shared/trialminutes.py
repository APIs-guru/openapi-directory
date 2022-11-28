from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrialMinutes:
    r"""TrialMinutes
    Represents information about free trial device minutes for an AWS account.
    """
    
    remaining: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remaining') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
