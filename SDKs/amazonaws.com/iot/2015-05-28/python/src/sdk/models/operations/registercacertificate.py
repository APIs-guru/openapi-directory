from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RegisterCaCertificateQueryParams:
    allow_auto_registration: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allowAutoRegistration', 'style': 'form', 'explode': True }})
    set_as_active: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'setAsActive', 'style': 'form', 'explode': True }})
    

@dataclass
class RegisterCaCertificateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RegisterCaCertificateRequestBodyRegistrationConfig:
    r"""RegisterCaCertificateRequestBodyRegistrationConfig
    The registration configuration.
    """
    
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    template_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateBody') }})
    

@dataclass_json
@dataclass
class RegisterCaCertificateRequestBody:
    ca_certificate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCertificate') }})
    verification_certificate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationCertificate') }})
    registration_config: Optional[RegisterCaCertificateRequestBodyRegistrationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationConfig') }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class RegisterCaCertificateRequest:
    headers: RegisterCaCertificateHeaders = field()
    query_params: RegisterCaCertificateQueryParams = field()
    request: RegisterCaCertificateRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterCaCertificateResponse:
    content_type: str = field()
    status_code: int = field()
    certificate_validation_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    register_ca_certificate_response: Optional[shared.RegisterCaCertificateResponse] = field(default=None)
    registration_code_validation_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
