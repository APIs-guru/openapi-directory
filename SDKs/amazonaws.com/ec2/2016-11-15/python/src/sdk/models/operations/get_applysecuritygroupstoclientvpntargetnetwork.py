from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetApplySecurityGroupsToClientVpnTargetNetworkActionEnum(str, Enum):
    APPLY_SECURITY_GROUPS_TO_CLIENT_VPN_TARGET_NETWORK = "ApplySecurityGroupsToClientVpnTargetNetwork"

class GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams:
    action: GetApplySecurityGroupsToClientVpnTargetNetworkActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    client_vpn_endpoint_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ClientVpnEndpointId', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    security_group_id: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'SecurityGroupId', 'style': 'form', 'explode': True }})
    version: GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_id: str = field(default=None, metadata={'query_param': { 'field_name': 'VpcId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetApplySecurityGroupsToClientVpnTargetNetworkHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetApplySecurityGroupsToClientVpnTargetNetworkRequest:
    query_params: GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams = field(default=None)
    headers: GetApplySecurityGroupsToClientVpnTargetNetworkHeaders = field(default=None)
    

@dataclass
class GetApplySecurityGroupsToClientVpnTargetNetworkResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
