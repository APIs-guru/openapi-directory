from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ClientVpnEndpoint:
    r"""ClientVpnEndpoint
    Describes a Client VPN endpoint.
    """
    
    associated_target_networks: Optional[List[AssociatedTargetNetwork]] = field(default=None)
    authentication_options: Optional[List[ClientVpnAuthentication]] = field(default=None)
    client_cidr_block: Optional[str] = field(default=None)
    client_connect_options: Optional[ClientConnectResponseOptions] = field(default=None)
    client_vpn_endpoint_id: Optional[str] = field(default=None)
    connection_log_options: Optional[ConnectionLogResponseOptions] = field(default=None)
    creation_time: Optional[str] = field(default=None)
    deletion_time: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    dns_name: Optional[str] = field(default=None)
    dns_servers: Optional[List[str]] = field(default=None)
    security_group_ids: Optional[List[str]] = field(default=None)
    self_service_portal_url: Optional[str] = field(default=None)
    server_certificate_arn: Optional[str] = field(default=None)
    split_tunnel: Optional[bool] = field(default=None)
    status: Optional[ClientVpnEndpointStatus] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    transport_protocol: Optional[TransportProtocolEnum] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    vpn_port: Optional[int] = field(default=None)
    vpn_protocol: Optional[VpnProtocolEnum] = field(default=None)
    
