from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeHostReservationOfferingsResult:
    next_token: Optional[str] = field(default=None)
    offering_set: Optional[List[HostOffering]] = field(default=None)
    
