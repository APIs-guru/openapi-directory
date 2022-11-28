from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Pipeline:
    r"""Pipeline
    The pipeline (queue) that is used to manage jobs.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    aws_kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsKmsKeyArn') }})
    content_config: Optional[PipelineOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentConfig') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    input_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputBucket') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    notifications: Optional[Notifications] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notifications') }})
    output_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputBucket') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    thumbnail_config: Optional[PipelineOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThumbnailConfig') }})
    
