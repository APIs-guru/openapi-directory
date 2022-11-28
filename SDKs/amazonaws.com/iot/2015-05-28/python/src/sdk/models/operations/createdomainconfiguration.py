from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateDomainConfigurationPathParams:
    domain_configuration_name: str = field(metadata={'path_param': { 'field_name': 'domainConfigurationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDomainConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateDomainConfigurationRequestBodyAuthorizerConfig:
    r"""CreateDomainConfigurationRequestBodyAuthorizerConfig
    An object that specifies the authorization service for a domain.
    """
    
    allow_authorizer_override: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowAuthorizerOverride') }})
    default_authorizer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAuthorizerName') }})
    
class CreateDomainConfigurationRequestBodyServiceTypeEnum(str, Enum):
    DATA = "DATA"
    CREDENTIAL_PROVIDER = "CREDENTIAL_PROVIDER"
    JOBS = "JOBS"


@dataclass_json
@dataclass
class CreateDomainConfigurationRequestBody:
    authorizer_config: Optional[CreateDomainConfigurationRequestBodyAuthorizerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerConfig') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    server_certificate_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCertificateArns') }})
    service_type: Optional[CreateDomainConfigurationRequestBodyServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceType') }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    validation_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationCertificateArn') }})
    

@dataclass
class CreateDomainConfigurationRequest:
    headers: CreateDomainConfigurationHeaders = field()
    path_params: CreateDomainConfigurationPathParams = field()
    request: CreateDomainConfigurationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDomainConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    certificate_validation_exception: Optional[Any] = field(default=None)
    create_domain_configuration_response: Optional[shared.CreateDomainConfigurationResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
