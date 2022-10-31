from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateBackendHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateBackendRequestBody:
    app_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    app_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appName' }})
    backend_environment_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backendEnvironmentName' }})
    resource_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceConfig' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    

@dataclass
class CreateBackendRequest:
    headers: CreateBackendHeaders = field(default=None)
    request: CreateBackendRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateBackendResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_backend_response: Optional[shared.CreateBackendResponse] = field(default=None)
    gateway_timeout_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
