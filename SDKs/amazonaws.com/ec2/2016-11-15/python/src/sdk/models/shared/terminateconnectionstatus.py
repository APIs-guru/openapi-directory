from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class TerminateConnectionStatus:
    r"""TerminateConnectionStatus
    Information about a terminated Client VPN endpoint client connection.
    """
    
    connection_id: Optional[str] = field(default=None)
    current_status: Optional[ClientVpnConnectionStatus] = field(default=None)
    previous_status: Optional[ClientVpnConnectionStatus] = field(default=None)
    
