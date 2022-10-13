from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreatePipelineHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreatePipelineRequestBodyContentConfig:
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bucket' }})
    permissions: Optional[List[shared.Permission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permissions' }})
    storage_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageClass' }})
    

@dataclass_json
@dataclass
class CreatePipelineRequestBodyNotifications:
    completed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Completed' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    progressing: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Progressing' }})
    warning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Warning' }})
    

@dataclass_json
@dataclass
class CreatePipelineRequestBodyThumbnailConfig:
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bucket' }})
    permissions: Optional[List[shared.Permission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permissions' }})
    storage_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageClass' }})
    

@dataclass_json
@dataclass
class CreatePipelineRequestBody:
    aws_kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsKmsKeyArn' }})
    content_config: Optional[CreatePipelineRequestBodyContentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentConfig' }})
    input_bucket: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputBucket' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    notifications: Optional[CreatePipelineRequestBodyNotifications] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notifications' }})
    output_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputBucket' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    thumbnail_config: Optional[CreatePipelineRequestBodyThumbnailConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThumbnailConfig' }})
    

@dataclass
class CreatePipelineRequest:
    headers: CreatePipelineHeaders = field(default=None)
    request: CreatePipelineRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePipelineResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_pipeline_response: Optional[shared.CreatePipelineResponse] = field(default=None)
    incompatible_version_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
