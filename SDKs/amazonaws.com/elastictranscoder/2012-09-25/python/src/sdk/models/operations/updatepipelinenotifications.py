from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdatePipelineNotificationsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePipelineNotificationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdatePipelineNotificationsRequestBodyNotifications:
    completed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Completed' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    progressing: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Progressing' }})
    warning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Warning' }})
    

@dataclass_json
@dataclass
class UpdatePipelineNotificationsRequestBody:
    notifications: UpdatePipelineNotificationsRequestBodyNotifications = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notifications' }})
    

@dataclass
class UpdatePipelineNotificationsRequest:
    path_params: UpdatePipelineNotificationsPathParams = field(default=None)
    headers: UpdatePipelineNotificationsHeaders = field(default=None)
    request: UpdatePipelineNotificationsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePipelineNotificationsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    incompatible_version_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_pipeline_notifications_response: Optional[shared.UpdatePipelineNotificationsResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
