from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ClientVpnConnection:
    r"""ClientVpnConnection
    Describes a client connection.
    """
    
    client_ip: Optional[str] = field(default=None)
    client_vpn_endpoint_id: Optional[str] = field(default=None)
    common_name: Optional[str] = field(default=None)
    connection_end_time: Optional[str] = field(default=None)
    connection_established_time: Optional[str] = field(default=None)
    connection_id: Optional[str] = field(default=None)
    egress_bytes: Optional[str] = field(default=None)
    egress_packets: Optional[str] = field(default=None)
    ingress_bytes: Optional[str] = field(default=None)
    ingress_packets: Optional[str] = field(default=None)
    posture_compliance_statuses: Optional[List[str]] = field(default=None)
    status: Optional[ClientVpnConnectionStatus] = field(default=None)
    timestamp: Optional[str] = field(default=None)
    username: Optional[str] = field(default=None)
    
