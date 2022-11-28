from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TerminateClientVpnConnectionsResult:
    client_vpn_endpoint_id: Optional[str] = field(default=None)
    connection_statuses: Optional[List[TerminateConnectionStatus]] = field(default=None)
    username: Optional[str] = field(default=None)
    
