from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetUnassignPrivateIPAddressesActionEnum(str, Enum):
    UNASSIGN_PRIVATE_IP_ADDRESSES = "UnassignPrivateIpAddresses"

class GetUnassignPrivateIPAddressesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetUnassignPrivateIPAddressesQueryParams:
    action: GetUnassignPrivateIPAddressesActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    network_interface_id: str = field(metadata={'query_param': { 'field_name': 'NetworkInterfaceId', 'style': 'form', 'explode': True }})
    version: GetUnassignPrivateIPAddressesVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    ipv4_prefix: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Ipv4Prefix', 'style': 'form', 'explode': True }})
    private_ip_address: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'PrivateIpAddress', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUnassignPrivateIPAddressesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUnassignPrivateIPAddressesRequest:
    headers: GetUnassignPrivateIPAddressesHeaders = field()
    query_params: GetUnassignPrivateIPAddressesQueryParams = field()
    

@dataclass
class GetUnassignPrivateIPAddressesResponse:
    content_type: str = field()
    status_code: int = field()
    
