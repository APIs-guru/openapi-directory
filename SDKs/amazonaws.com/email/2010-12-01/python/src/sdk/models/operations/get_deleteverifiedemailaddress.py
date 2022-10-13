from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteVerifiedEmailAddressActionEnum(str, Enum):
    DELETE_VERIFIED_EMAIL_ADDRESS = "DeleteVerifiedEmailAddress"

class GetDeleteVerifiedEmailAddressVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetDeleteVerifiedEmailAddressQueryParams:
    action: GetDeleteVerifiedEmailAddressActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    email_address: str = field(default=None, metadata={'query_param': { 'field_name': 'EmailAddress', 'style': 'form', 'explode': True }})
    version: GetDeleteVerifiedEmailAddressVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteVerifiedEmailAddressHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDeleteVerifiedEmailAddressRequest:
    query_params: GetDeleteVerifiedEmailAddressQueryParams = field(default=None)
    headers: GetDeleteVerifiedEmailAddressHeaders = field(default=None)
    

@dataclass
class GetDeleteVerifiedEmailAddressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
