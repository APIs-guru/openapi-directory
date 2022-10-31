from dataclasses import dataclass, field
from typing import Enum,Optional

class GetAuthorizeClientVpnIngressActionEnum(str, Enum):
    AUTHORIZE_CLIENT_VPN_INGRESS = "AuthorizeClientVpnIngress"

class GetAuthorizeClientVpnIngressVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetAuthorizeClientVpnIngressQueryParams:
    access_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AccessGroupId', 'style': 'form', 'explode': True }})
    action: GetAuthorizeClientVpnIngressActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    authorize_all_groups: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AuthorizeAllGroups', 'style': 'form', 'explode': True }})
    client_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClientToken', 'style': 'form', 'explode': True }})
    client_vpn_endpoint_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ClientVpnEndpointId', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    target_network_cidr: str = field(default=None, metadata={'query_param': { 'field_name': 'TargetNetworkCidr', 'style': 'form', 'explode': True }})
    version: GetAuthorizeClientVpnIngressVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAuthorizeClientVpnIngressHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAuthorizeClientVpnIngressRequest:
    query_params: GetAuthorizeClientVpnIngressQueryParams = field(default=None)
    headers: GetAuthorizeClientVpnIngressHeaders = field(default=None)
    

@dataclass
class GetAuthorizeClientVpnIngressResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
