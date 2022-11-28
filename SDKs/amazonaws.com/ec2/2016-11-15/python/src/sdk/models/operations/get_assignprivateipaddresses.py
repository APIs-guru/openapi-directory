from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetAssignPrivateIPAddressesActionEnum(str, Enum):
    ASSIGN_PRIVATE_IP_ADDRESSES = "AssignPrivateIpAddresses"

class GetAssignPrivateIPAddressesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetAssignPrivateIPAddressesQueryParams:
    action: GetAssignPrivateIPAddressesActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    network_interface_id: str = field(metadata={'query_param': { 'field_name': 'NetworkInterfaceId', 'style': 'form', 'explode': True }})
    version: GetAssignPrivateIPAddressesVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    allow_reassignment: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AllowReassignment', 'style': 'form', 'explode': True }})
    ipv4_prefix: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Ipv4Prefix', 'style': 'form', 'explode': True }})
    ipv4_prefix_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Ipv4PrefixCount', 'style': 'form', 'explode': True }})
    private_ip_address: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'PrivateIpAddress', 'style': 'form', 'explode': True }})
    secondary_private_ip_address_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'SecondaryPrivateIpAddressCount', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAssignPrivateIPAddressesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssignPrivateIPAddressesRequest:
    headers: GetAssignPrivateIPAddressesHeaders = field()
    query_params: GetAssignPrivateIPAddressesQueryParams = field()
    

@dataclass
class GetAssignPrivateIPAddressesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
