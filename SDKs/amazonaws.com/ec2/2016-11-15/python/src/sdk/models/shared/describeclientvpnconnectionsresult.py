from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeClientVpnConnectionsResult:
    connections: Optional[List[ClientVpnConnection]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
