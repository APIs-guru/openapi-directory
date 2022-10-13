from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateEnvironmentPathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEnvironmentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class UpdateEnvironmentRequestBodyFederationModeEnum(str, Enum):
    FEDERATED = "FEDERATED"
    LOCAL = "LOCAL"


@dataclass_json
@dataclass
class UpdateEnvironmentRequestBodyFederationParameters:
    application_call_back_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationCallBackURL' }})
    attribute_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeMap' }})
    federation_provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federationProviderName' }})
    federation_urn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federationURN' }})
    saml_metadata_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samlMetadataDocument' }})
    saml_metadata_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samlMetadataURL' }})
    

@dataclass_json
@dataclass
class UpdateEnvironmentRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    federation_mode: Optional[UpdateEnvironmentRequestBodyFederationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federationMode' }})
    federation_parameters: Optional[UpdateEnvironmentRequestBodyFederationParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federationParameters' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class UpdateEnvironmentRequest:
    path_params: UpdateEnvironmentPathParams = field(default=None)
    headers: UpdateEnvironmentHeaders = field(default=None)
    request: UpdateEnvironmentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateEnvironmentResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_environment_response: Optional[shared.UpdateEnvironmentResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
