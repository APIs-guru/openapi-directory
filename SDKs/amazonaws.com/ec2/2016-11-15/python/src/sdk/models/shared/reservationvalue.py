from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ReservationValue:
    r"""ReservationValue
    The cost associated with the Reserved Instance.
    """
    
    hourly_price: Optional[str] = field(default=None)
    remaining_total_value: Optional[str] = field(default=None)
    remaining_upfront_value: Optional[str] = field(default=None)
    
