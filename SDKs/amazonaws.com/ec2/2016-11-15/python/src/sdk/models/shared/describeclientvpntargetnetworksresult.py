from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeClientVpnTargetNetworksResult:
    client_vpn_target_networks: Optional[List[TargetNetwork]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
