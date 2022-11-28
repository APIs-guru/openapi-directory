from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeAddressesAttributeResult:
    addresses: Optional[List[AddressAttribute]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
