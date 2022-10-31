from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateProjectHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateProjectRequestBody:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    portal_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalId' }})
    project_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectDescription' }})
    project_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectName' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateProjectRequest:
    headers: CreateProjectHeaders = field(default=None)
    request: CreateProjectRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateProjectResponse:
    content_type: str = field(default=None)
    create_project_response: Optional[shared.CreateProjectResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
