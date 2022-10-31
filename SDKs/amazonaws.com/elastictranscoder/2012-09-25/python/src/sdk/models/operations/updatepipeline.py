from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdatePipelinePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePipelineHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdatePipelineRequestBodyContentConfig:
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bucket' }})
    permissions: Optional[List[shared.Permission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permissions' }})
    storage_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageClass' }})
    

@dataclass_json
@dataclass
class UpdatePipelineRequestBodyNotifications:
    completed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Completed' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    progressing: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Progressing' }})
    warning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Warning' }})
    

@dataclass_json
@dataclass
class UpdatePipelineRequestBodyThumbnailConfig:
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bucket' }})
    permissions: Optional[List[shared.Permission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permissions' }})
    storage_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageClass' }})
    

@dataclass_json
@dataclass
class UpdatePipelineRequestBody:
    aws_kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsKmsKeyArn' }})
    content_config: Optional[UpdatePipelineRequestBodyContentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentConfig' }})
    input_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputBucket' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    notifications: Optional[UpdatePipelineRequestBodyNotifications] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notifications' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    thumbnail_config: Optional[UpdatePipelineRequestBodyThumbnailConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThumbnailConfig' }})
    

@dataclass
class UpdatePipelineRequest:
    path_params: UpdatePipelinePathParams = field(default=None)
    headers: UpdatePipelineHeaders = field(default=None)
    request: UpdatePipelineRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePipelineResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    incompatible_version_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_pipeline_response: Optional[shared.UpdatePipelineResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
