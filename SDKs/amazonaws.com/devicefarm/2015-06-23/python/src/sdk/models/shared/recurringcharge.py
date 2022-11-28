from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecurringCharge:
    r"""RecurringCharge
    Specifies whether charges for devices are recurring.
    """
    
    cost: Optional[MonetaryAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    frequency: Optional[RecurringChargeFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    
