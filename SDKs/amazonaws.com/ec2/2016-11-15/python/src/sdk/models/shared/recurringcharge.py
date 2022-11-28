from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class RecurringCharge:
    r"""RecurringCharge
    Describes a recurring charge.
    """
    
    amount: Optional[float] = field(default=None)
    frequency: Optional[RecurringChargeFrequencyEnum] = field(default=None)
    
