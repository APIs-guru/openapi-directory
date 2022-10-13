from dataclasses import dataclass, field
from typing import Enum,Optional

class GetCreateCustomVerificationEmailTemplateActionEnum(str, Enum):
    CREATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE = "CreateCustomVerificationEmailTemplate"

class GetCreateCustomVerificationEmailTemplateVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetCreateCustomVerificationEmailTemplateQueryParams:
    action: GetCreateCustomVerificationEmailTemplateActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    failure_redirection_url: str = field(default=None, metadata={'query_param': { 'field_name': 'FailureRedirectionURL', 'style': 'form', 'explode': True }})
    from_email_address: str = field(default=None, metadata={'query_param': { 'field_name': 'FromEmailAddress', 'style': 'form', 'explode': True }})
    success_redirection_url: str = field(default=None, metadata={'query_param': { 'field_name': 'SuccessRedirectionURL', 'style': 'form', 'explode': True }})
    template_content: str = field(default=None, metadata={'query_param': { 'field_name': 'TemplateContent', 'style': 'form', 'explode': True }})
    template_name: str = field(default=None, metadata={'query_param': { 'field_name': 'TemplateName', 'style': 'form', 'explode': True }})
    template_subject: str = field(default=None, metadata={'query_param': { 'field_name': 'TemplateSubject', 'style': 'form', 'explode': True }})
    version: GetCreateCustomVerificationEmailTemplateVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateCustomVerificationEmailTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetCreateCustomVerificationEmailTemplateRequest:
    query_params: GetCreateCustomVerificationEmailTemplateQueryParams = field(default=None)
    headers: GetCreateCustomVerificationEmailTemplateHeaders = field(default=None)
    

@dataclass
class GetCreateCustomVerificationEmailTemplateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
