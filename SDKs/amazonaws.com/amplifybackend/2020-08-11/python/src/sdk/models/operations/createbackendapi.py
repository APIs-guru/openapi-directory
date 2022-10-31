from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateBackendAPIPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBackendAPIHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateBackendAPIRequestBodyResourceConfig:
    additional_auth_types: Optional[List[shared.BackendAPIAuthType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalAuthTypes' }})
    api_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiName' }})
    conflict_resolution: Optional[shared.BackendAPIConflictResolution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConflictResolution' }})
    default_auth_type: Optional[shared.BackendAPIAuthType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultAuthType' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Service' }})
    transform_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformSchema' }})
    

@dataclass_json
@dataclass
class CreateBackendAPIRequestBody:
    backend_environment_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backendEnvironmentName' }})
    resource_config: CreateBackendAPIRequestBodyResourceConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceConfig' }})
    resource_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    

@dataclass
class CreateBackendAPIRequest:
    path_params: CreateBackendAPIPathParams = field(default=None)
    headers: CreateBackendAPIHeaders = field(default=None)
    request: CreateBackendAPIRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateBackendAPIResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_backend_api_response: Optional[shared.CreateBackendAPIResponse] = field(default=None)
    gateway_timeout_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
