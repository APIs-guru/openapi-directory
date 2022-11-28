from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeMovingAddressesResult:
    moving_address_statuses: Optional[List[MovingAddressStatus]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
