from dataclasses import dataclass, field
from typing import Enum,Optional

class GetCheckDNSAvailabilityActionEnum(str, Enum):
    CHECK_DNS_AVAILABILITY = "CheckDNSAvailability"

class GetCheckDNSAvailabilityVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetCheckDNSAvailabilityQueryParams:
    action: GetCheckDNSAvailabilityActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cname_prefix: str = field(default=None, metadata={'query_param': { 'field_name': 'CNAMEPrefix', 'style': 'form', 'explode': True }})
    version: GetCheckDNSAvailabilityVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCheckDNSAvailabilityHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetCheckDNSAvailabilityRequest:
    query_params: GetCheckDNSAvailabilityQueryParams = field(default=None)
    headers: GetCheckDNSAvailabilityHeaders = field(default=None)
    

@dataclass
class GetCheckDNSAvailabilityResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
