from dataclasses import dataclass, field
from typing import Enum,Optional

class GetSetIdentityMailFromDomainActionEnum(str, Enum):
    SET_IDENTITY_MAIL_FROM_DOMAIN = "SetIdentityMailFromDomain"

class GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum(str, Enum):
    USE_DEFAULT_VALUE = "UseDefaultValue"
    REJECT_MESSAGE = "RejectMessage"

class GetSetIdentityMailFromDomainVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetSetIdentityMailFromDomainQueryParams:
    action: GetSetIdentityMailFromDomainActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    behavior_on_mx_failure: Optional[GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum] = field(default=None, metadata={'query_param': { 'field_name': 'BehaviorOnMXFailure', 'style': 'form', 'explode': True }})
    identity: str = field(default=None, metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    mail_from_domain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MailFromDomain', 'style': 'form', 'explode': True }})
    version: GetSetIdentityMailFromDomainVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetIdentityMailFromDomainHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetSetIdentityMailFromDomainRequest:
    query_params: GetSetIdentityMailFromDomainQueryParams = field(default=None)
    headers: GetSetIdentityMailFromDomainHeaders = field(default=None)
    

@dataclass
class GetSetIdentityMailFromDomainResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
