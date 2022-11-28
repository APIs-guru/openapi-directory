from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RecurringCharge:
    r"""RecurringCharge
    Contains the specific price and frequency of a recurring charges for a reserved cache node, or for a reserved cache node offering.
    """
    
    recurring_charge_amount: Optional[float] = field(default=None)
    recurring_charge_frequency: Optional[str] = field(default=None)
    
