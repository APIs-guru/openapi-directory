from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeByoipCidrsResult:
    byoip_cidrs: Optional[List[ByoipCidr]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
