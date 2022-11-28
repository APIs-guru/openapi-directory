from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeHostReservationsResult:
    host_reservation_set: Optional[List[HostReservation]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
