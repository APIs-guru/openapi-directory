from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CancelCapacityReservationResult:
    return_: Optional[bool] = field(default=None)
    
