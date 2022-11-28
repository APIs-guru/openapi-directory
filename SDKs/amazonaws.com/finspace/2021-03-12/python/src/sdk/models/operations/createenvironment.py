from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateEnvironmentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateEnvironmentRequestBodyFederationModeEnum(str, Enum):
    FEDERATED = "FEDERATED"
    LOCAL = "LOCAL"


@dataclass_json
@dataclass
class CreateEnvironmentRequestBodyFederationParameters:
    r"""CreateEnvironmentRequestBodyFederationParameters
    Configuration information when authentication mode is FEDERATED.
    """
    
    application_call_back_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationCallBackURL') }})
    attribute_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeMap') }})
    federation_provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('federationProviderName') }})
    federation_urn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('federationURN') }})
    saml_metadata_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samlMetadataDocument') }})
    saml_metadata_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samlMetadataURL') }})
    

@dataclass_json
@dataclass
class CreateEnvironmentRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    federation_mode: Optional[CreateEnvironmentRequestBodyFederationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('federationMode') }})
    federation_parameters: Optional[CreateEnvironmentRequestBodyFederationParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('federationParameters') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyId') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateEnvironmentRequest:
    headers: CreateEnvironmentHeaders = field()
    request: CreateEnvironmentRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    create_environment_response: Optional[shared.CreateEnvironmentResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
