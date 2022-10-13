from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetAssignIpv6AddressesActionEnum(str, Enum):
    ASSIGN_IPV6_ADDRESSES = "AssignIpv6Addresses"

class GetAssignIpv6AddressesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetAssignIpv6AddressesQueryParams:
    action: GetAssignIpv6AddressesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    ipv6_address_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Ipv6AddressCount', 'style': 'form', 'explode': True }})
    ipv6_addresses: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Ipv6Addresses', 'style': 'form', 'explode': True }})
    ipv6_prefix: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Ipv6Prefix', 'style': 'form', 'explode': True }})
    ipv6_prefix_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Ipv6PrefixCount', 'style': 'form', 'explode': True }})
    network_interface_id: str = field(default=None, metadata={'query_param': { 'field_name': 'NetworkInterfaceId', 'style': 'form', 'explode': True }})
    version: GetAssignIpv6AddressesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAssignIpv6AddressesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetAssignIpv6AddressesRequest:
    query_params: GetAssignIpv6AddressesQueryParams = field(default=None)
    headers: GetAssignIpv6AddressesHeaders = field(default=None)
    

@dataclass
class GetAssignIpv6AddressesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
