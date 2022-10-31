from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetGetIdentityVerificationAttributesActionEnum(str, Enum):
    GET_IDENTITY_VERIFICATION_ATTRIBUTES = "GetIdentityVerificationAttributes"

class GetGetIdentityVerificationAttributesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetGetIdentityVerificationAttributesQueryParams:
    action: GetGetIdentityVerificationAttributesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    identities: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'Identities', 'style': 'form', 'explode': True }})
    version: GetGetIdentityVerificationAttributesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetIdentityVerificationAttributesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGetIdentityVerificationAttributesRequest:
    query_params: GetGetIdentityVerificationAttributesQueryParams = field(default=None)
    headers: GetGetIdentityVerificationAttributesHeaders = field(default=None)
    

@dataclass
class GetGetIdentityVerificationAttributesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
