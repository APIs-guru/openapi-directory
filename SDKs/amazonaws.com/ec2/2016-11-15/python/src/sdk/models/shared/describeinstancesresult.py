from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeInstancesResult:
    next_token: Optional[str] = field(default=None)
    reservations: Optional[List[Reservation]] = field(default=None)
    
