from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ImportBackendAuthPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    backend_environment_name: str = field(default=None, metadata={'path_param': { 'field_name': 'backendEnvironmentName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImportBackendAuthHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ImportBackendAuthRequestBody:
    identity_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityPoolId' }})
    native_client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nativeClientId' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPoolId' }})
    web_client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webClientId' }})
    

@dataclass
class ImportBackendAuthRequest:
    path_params: ImportBackendAuthPathParams = field(default=None)
    headers: ImportBackendAuthHeaders = field(default=None)
    request: ImportBackendAuthRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ImportBackendAuthResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    gateway_timeout_exception: Optional[Any] = field(default=None)
    import_backend_auth_response: Optional[shared.ImportBackendAuthResponse] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
