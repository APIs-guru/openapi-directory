from dataclasses import dataclass, field
from typing import Enum,Optional

class GetSendCustomVerificationEmailActionEnum(str, Enum):
    SEND_CUSTOM_VERIFICATION_EMAIL = "SendCustomVerificationEmail"

class GetSendCustomVerificationEmailVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetSendCustomVerificationEmailQueryParams:
    action: GetSendCustomVerificationEmailActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    configuration_set_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ConfigurationSetName', 'style': 'form', 'explode': True }})
    email_address: str = field(default=None, metadata={'query_param': { 'field_name': 'EmailAddress', 'style': 'form', 'explode': True }})
    template_name: str = field(default=None, metadata={'query_param': { 'field_name': 'TemplateName', 'style': 'form', 'explode': True }})
    version: GetSendCustomVerificationEmailVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSendCustomVerificationEmailHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSendCustomVerificationEmailRequest:
    query_params: GetSendCustomVerificationEmailQueryParams = field(default=None)
    headers: GetSendCustomVerificationEmailHeaders = field(default=None)
    

@dataclass
class GetSendCustomVerificationEmailResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
