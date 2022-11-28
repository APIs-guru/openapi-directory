from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeClientVpnRoutesResult:
    next_token: Optional[str] = field(default=None)
    routes: Optional[List[ClientVpnRoute]] = field(default=None)
    
