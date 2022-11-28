from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeDhcpOptionsResult:
    dhcp_options: Optional[List[DhcpOptions]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
