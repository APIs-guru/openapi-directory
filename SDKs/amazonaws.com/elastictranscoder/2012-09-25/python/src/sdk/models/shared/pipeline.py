from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pipelineoutputconfig
from . import notifications
from . import pipelineoutputconfig


@dataclass_json
@dataclass
class Pipeline:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    aws_kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsKmsKeyArn' }})
    content_config: Optional[pipelineoutputconfig.PipelineOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentConfig' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    input_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputBucket' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    notifications: Optional[notifications.Notifications] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notifications' }})
    output_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputBucket' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    thumbnail_config: Optional[pipelineoutputconfig.PipelineOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThumbnailConfig' }})
    
