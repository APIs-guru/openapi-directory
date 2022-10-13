from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetGetIdentityMailFromDomainAttributesActionEnum(str, Enum):
    GET_IDENTITY_MAIL_FROM_DOMAIN_ATTRIBUTES = "GetIdentityMailFromDomainAttributes"

class GetGetIdentityMailFromDomainAttributesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetGetIdentityMailFromDomainAttributesQueryParams:
    action: GetGetIdentityMailFromDomainAttributesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    identities: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'Identities', 'style': 'form', 'explode': True }})
    version: GetGetIdentityMailFromDomainAttributesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetIdentityMailFromDomainAttributesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetGetIdentityMailFromDomainAttributesRequest:
    query_params: GetGetIdentityMailFromDomainAttributesQueryParams = field(default=None)
    headers: GetGetIdentityMailFromDomainAttributesHeaders = field(default=None)
    

@dataclass
class GetGetIdentityMailFromDomainAttributesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
