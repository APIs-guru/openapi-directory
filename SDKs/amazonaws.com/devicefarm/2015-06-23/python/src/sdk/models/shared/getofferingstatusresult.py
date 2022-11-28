from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetOfferingStatusResult:
    r"""GetOfferingStatusResult
    Returns the status result for a device offering.
    """
    
    current: Optional[dict[str, OfferingStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    next_period: Optional[dict[str, OfferingStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPeriod') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
