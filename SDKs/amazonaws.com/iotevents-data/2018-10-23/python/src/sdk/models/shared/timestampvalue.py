from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimestampValue:
    r"""TimestampValue
    Contains information about a timestamp.
    """
    
    time_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeInMillis') }})
    
