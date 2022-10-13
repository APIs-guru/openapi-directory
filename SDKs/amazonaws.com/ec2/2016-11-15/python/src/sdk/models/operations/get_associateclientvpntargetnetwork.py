from dataclasses import dataclass, field
from typing import Enum,Optional

class GetAssociateClientVpnTargetNetworkActionEnum(str, Enum):
    ASSOCIATE_CLIENT_VPN_TARGET_NETWORK = "AssociateClientVpnTargetNetwork"

class GetAssociateClientVpnTargetNetworkVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetAssociateClientVpnTargetNetworkQueryParams:
    action: GetAssociateClientVpnTargetNetworkActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    client_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClientToken', 'style': 'form', 'explode': True }})
    client_vpn_endpoint_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ClientVpnEndpointId', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    subnet_id: str = field(default=None, metadata={'query_param': { 'field_name': 'SubnetId', 'style': 'form', 'explode': True }})
    version: GetAssociateClientVpnTargetNetworkVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAssociateClientVpnTargetNetworkHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetAssociateClientVpnTargetNetworkRequest:
    query_params: GetAssociateClientVpnTargetNetworkQueryParams = field(default=None)
    headers: GetAssociateClientVpnTargetNetworkHeaders = field(default=None)
    

@dataclass
class GetAssociateClientVpnTargetNetworkResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
