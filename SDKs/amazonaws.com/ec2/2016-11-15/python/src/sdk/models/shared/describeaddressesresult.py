from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeAddressesResult:
    addresses: Optional[List[Address]] = field(default=None)
    
