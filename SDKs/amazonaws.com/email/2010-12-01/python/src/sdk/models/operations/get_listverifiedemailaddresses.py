from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetListVerifiedEmailAddressesActionEnum(str, Enum):
    LIST_VERIFIED_EMAIL_ADDRESSES = "ListVerifiedEmailAddresses"

class GetListVerifiedEmailAddressesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetListVerifiedEmailAddressesQueryParams:
    action: GetListVerifiedEmailAddressesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetListVerifiedEmailAddressesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListVerifiedEmailAddressesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetListVerifiedEmailAddressesRequest:
    query_params: GetListVerifiedEmailAddressesQueryParams = field(default=None)
    headers: GetListVerifiedEmailAddressesHeaders = field(default=None)
    

@dataclass
class GetListVerifiedEmailAddressesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
