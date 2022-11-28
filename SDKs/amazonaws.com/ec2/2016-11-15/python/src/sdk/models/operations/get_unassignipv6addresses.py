from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetUnassignIpv6AddressesActionEnum(str, Enum):
    UNASSIGN_IPV6_ADDRESSES = "UnassignIpv6Addresses"

class GetUnassignIpv6AddressesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetUnassignIpv6AddressesQueryParams:
    action: GetUnassignIpv6AddressesActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    network_interface_id: str = field(metadata={'query_param': { 'field_name': 'NetworkInterfaceId', 'style': 'form', 'explode': True }})
    version: GetUnassignIpv6AddressesVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    ipv6_addresses: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Ipv6Addresses', 'style': 'form', 'explode': True }})
    ipv6_prefix: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Ipv6Prefix', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUnassignIpv6AddressesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUnassignIpv6AddressesRequest:
    headers: GetUnassignIpv6AddressesHeaders = field()
    query_params: GetUnassignIpv6AddressesQueryParams = field()
    

@dataclass
class GetUnassignIpv6AddressesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
