from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ModifyCapacityReservationResult:
    return_: Optional[bool] = field(default=None)
    
