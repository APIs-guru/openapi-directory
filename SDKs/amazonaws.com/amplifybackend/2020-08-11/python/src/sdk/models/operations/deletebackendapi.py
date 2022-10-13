from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteBackendAPIPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    backend_environment_name: str = field(default=None, metadata={'path_param': { 'field_name': 'backendEnvironmentName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBackendAPIHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class DeleteBackendAPIRequestBodyResourceConfig:
    additional_auth_types: Optional[List[shared.BackendAPIAuthType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalAuthTypes' }})
    api_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiName' }})
    conflict_resolution: Optional[shared.BackendAPIConflictResolution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConflictResolution' }})
    default_auth_type: Optional[shared.BackendAPIAuthType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultAuthType' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Service' }})
    transform_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformSchema' }})
    

@dataclass_json
@dataclass
class DeleteBackendAPIRequestBody:
    resource_config: Optional[DeleteBackendAPIRequestBodyResourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceConfig' }})
    resource_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    

@dataclass
class DeleteBackendAPIRequest:
    path_params: DeleteBackendAPIPathParams = field(default=None)
    headers: DeleteBackendAPIHeaders = field(default=None)
    request: DeleteBackendAPIRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteBackendAPIResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    delete_backend_api_response: Optional[shared.DeleteBackendAPIResponse] = field(default=None)
    gateway_timeout_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
