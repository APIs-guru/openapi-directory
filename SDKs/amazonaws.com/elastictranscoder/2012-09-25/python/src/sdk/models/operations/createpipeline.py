from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreatePipelineHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreatePipelineRequestBodyContentConfig:
    r"""CreatePipelineRequestBodyContentConfig
    The <code>PipelineOutputConfig</code> structure.
    """
    
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bucket') }})
    permissions: Optional[List[shared.Permission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    storage_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageClass') }})
    

@dataclass_json
@dataclass
class CreatePipelineRequestBodyNotifications:
    r"""CreatePipelineRequestBodyNotifications
    <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
    """
    
    completed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Completed') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    progressing: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Progressing') }})
    warning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Warning') }})
    

@dataclass_json
@dataclass
class CreatePipelineRequestBodyThumbnailConfig:
    r"""CreatePipelineRequestBodyThumbnailConfig
    The <code>PipelineOutputConfig</code> structure.
    """
    
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bucket') }})
    permissions: Optional[List[shared.Permission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    storage_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageClass') }})
    

@dataclass_json
@dataclass
class CreatePipelineRequestBody:
    input_bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputBucket') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    aws_kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsKmsKeyArn') }})
    content_config: Optional[CreatePipelineRequestBodyContentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentConfig') }})
    notifications: Optional[CreatePipelineRequestBodyNotifications] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notifications') }})
    output_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputBucket') }})
    thumbnail_config: Optional[CreatePipelineRequestBodyThumbnailConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThumbnailConfig') }})
    

@dataclass
class CreatePipelineRequest:
    headers: CreatePipelineHeaders = field()
    request: CreatePipelineRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePipelineResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    create_pipeline_response: Optional[shared.CreatePipelineResponse] = field(default=None)
    incompatible_version_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
