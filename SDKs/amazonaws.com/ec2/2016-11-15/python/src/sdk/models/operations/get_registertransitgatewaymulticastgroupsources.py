from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetRegisterTransitGatewayMulticastGroupSourcesActionEnum(str, Enum):
    REGISTER_TRANSIT_GATEWAY_MULTICAST_GROUP_SOURCES = "RegisterTransitGatewayMulticastGroupSources"

class GetRegisterTransitGatewayMulticastGroupSourcesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetRegisterTransitGatewayMulticastGroupSourcesQueryParams:
    action: GetRegisterTransitGatewayMulticastGroupSourcesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    group_ip_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'GroupIpAddress', 'style': 'form', 'explode': True }})
    network_interface_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'NetworkInterfaceIds', 'style': 'form', 'explode': True }})
    transit_gateway_multicast_domain_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TransitGatewayMulticastDomainId', 'style': 'form', 'explode': True }})
    version: GetRegisterTransitGatewayMulticastGroupSourcesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRegisterTransitGatewayMulticastGroupSourcesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRegisterTransitGatewayMulticastGroupSourcesRequest:
    query_params: GetRegisterTransitGatewayMulticastGroupSourcesQueryParams = field(default=None)
    headers: GetRegisterTransitGatewayMulticastGroupSourcesHeaders = field(default=None)
    

@dataclass
class GetRegisterTransitGatewayMulticastGroupSourcesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
