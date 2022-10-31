from dataclasses import dataclass, field
from typing import Enum,Optional

class GetSetIPAddressTypeActionEnum(str, Enum):
    SET_IP_ADDRESS_TYPE = "SetIpAddressType"

class GetSetIPAddressTypeIPAddressTypeEnum(str, Enum):
    IPV4 = "ipv4"
    DUALSTACK = "dualstack"

class GetSetIPAddressTypeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_12_01 = "2015-12-01"


@dataclass
class GetSetIPAddressTypeQueryParams:
    action: GetSetIPAddressTypeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    ip_address_type: GetSetIPAddressTypeIPAddressTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'IpAddressType', 'style': 'form', 'explode': True }})
    load_balancer_arn: str = field(default=None, metadata={'query_param': { 'field_name': 'LoadBalancerArn', 'style': 'form', 'explode': True }})
    version: GetSetIPAddressTypeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetIPAddressTypeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetIPAddressTypeRequest:
    query_params: GetSetIPAddressTypeQueryParams = field(default=None)
    headers: GetSetIPAddressTypeHeaders = field(default=None)
    

@dataclass
class GetSetIPAddressTypeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
