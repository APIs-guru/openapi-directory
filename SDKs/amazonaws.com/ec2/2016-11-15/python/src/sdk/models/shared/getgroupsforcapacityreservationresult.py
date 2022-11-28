from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetGroupsForCapacityReservationResult:
    capacity_reservation_groups: Optional[List[CapacityReservationGroup]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
