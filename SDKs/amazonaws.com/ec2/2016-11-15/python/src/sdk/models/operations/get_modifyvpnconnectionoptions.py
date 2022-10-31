from dataclasses import dataclass, field
from typing import Enum,Optional

class GetModifyVpnConnectionOptionsActionEnum(str, Enum):
    MODIFY_VPN_CONNECTION_OPTIONS = "ModifyVpnConnectionOptions"

class GetModifyVpnConnectionOptionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyVpnConnectionOptionsQueryParams:
    action: GetModifyVpnConnectionOptionsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    local_ipv4_network_cidr: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LocalIpv4NetworkCidr', 'style': 'form', 'explode': True }})
    local_ipv6_network_cidr: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LocalIpv6NetworkCidr', 'style': 'form', 'explode': True }})
    remote_ipv4_network_cidr: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'RemoteIpv4NetworkCidr', 'style': 'form', 'explode': True }})
    remote_ipv6_network_cidr: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'RemoteIpv6NetworkCidr', 'style': 'form', 'explode': True }})
    version: GetModifyVpnConnectionOptionsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpn_connection_id: str = field(default=None, metadata={'query_param': { 'field_name': 'VpnConnectionId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyVpnConnectionOptionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyVpnConnectionOptionsRequest:
    query_params: GetModifyVpnConnectionOptionsQueryParams = field(default=None)
    headers: GetModifyVpnConnectionOptionsHeaders = field(default=None)
    

@dataclass
class GetModifyVpnConnectionOptionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
