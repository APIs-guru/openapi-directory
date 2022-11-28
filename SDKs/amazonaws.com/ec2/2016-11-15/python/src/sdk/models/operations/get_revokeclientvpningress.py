from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetRevokeClientVpnIngressActionEnum(str, Enum):
    REVOKE_CLIENT_VPN_INGRESS = "RevokeClientVpnIngress"

class GetRevokeClientVpnIngressVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetRevokeClientVpnIngressQueryParams:
    action: GetRevokeClientVpnIngressActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    client_vpn_endpoint_id: str = field(metadata={'query_param': { 'field_name': 'ClientVpnEndpointId', 'style': 'form', 'explode': True }})
    target_network_cidr: str = field(metadata={'query_param': { 'field_name': 'TargetNetworkCidr', 'style': 'form', 'explode': True }})
    version: GetRevokeClientVpnIngressVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    access_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AccessGroupId', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    revoke_all_groups: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'RevokeAllGroups', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRevokeClientVpnIngressHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRevokeClientVpnIngressRequest:
    headers: GetRevokeClientVpnIngressHeaders = field()
    query_params: GetRevokeClientVpnIngressQueryParams = field()
    

@dataclass
class GetRevokeClientVpnIngressResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
