from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RegisterCaCertificateQueryParams:
    allow_auto_registration: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allowAutoRegistration', 'style': 'form', 'explode': True }})
    set_as_active: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'setAsActive', 'style': 'form', 'explode': True }})
    

@dataclass
class RegisterCaCertificateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class RegisterCaCertificateRequestBodyRegistrationConfig:
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    template_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateBody' }})
    

@dataclass_json
@dataclass
class RegisterCaCertificateRequestBody:
    ca_certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caCertificate' }})
    registration_config: Optional[RegisterCaCertificateRequestBodyRegistrationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationConfig' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    verification_certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationCertificate' }})
    

@dataclass
class RegisterCaCertificateRequest:
    query_params: RegisterCaCertificateQueryParams = field(default=None)
    headers: RegisterCaCertificateHeaders = field(default=None)
    request: RegisterCaCertificateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterCaCertificateResponse:
    certificate_validation_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    register_ca_certificate_response: Optional[shared.RegisterCaCertificateResponse] = field(default=None)
    registration_code_validation_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
