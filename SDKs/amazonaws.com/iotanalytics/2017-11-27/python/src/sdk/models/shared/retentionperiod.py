from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetentionPeriod:
    r"""RetentionPeriod
    How long, in days, message data is kept.
    """
    
    number_of_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfDays') }})
    unlimited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unlimited') }})
    
