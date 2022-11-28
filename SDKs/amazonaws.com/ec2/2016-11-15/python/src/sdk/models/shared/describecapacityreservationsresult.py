from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeCapacityReservationsResult:
    capacity_reservations: Optional[List[CapacityReservation]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
