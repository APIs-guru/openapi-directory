from dataclasses import dataclass, field
from typing import Enum,Optional

class GetModifyVpnConnectionActionEnum(str, Enum):
    MODIFY_VPN_CONNECTION = "ModifyVpnConnection"

class GetModifyVpnConnectionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyVpnConnectionQueryParams:
    action: GetModifyVpnConnectionActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    customer_gateway_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CustomerGatewayId', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    transit_gateway_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TransitGatewayId', 'style': 'form', 'explode': True }})
    version: GetModifyVpnConnectionVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpn_connection_id: str = field(default=None, metadata={'query_param': { 'field_name': 'VpnConnectionId', 'style': 'form', 'explode': True }})
    vpn_gateway_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'VpnGatewayId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyVpnConnectionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyVpnConnectionRequest:
    query_params: GetModifyVpnConnectionQueryParams = field(default=None)
    headers: GetModifyVpnConnectionHeaders = field(default=None)
    

@dataclass
class GetModifyVpnConnectionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
