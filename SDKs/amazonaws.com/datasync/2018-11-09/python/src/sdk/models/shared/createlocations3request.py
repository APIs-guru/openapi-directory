from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateLocationS3Request:
    r"""CreateLocationS3Request
    CreateLocationS3Request
    """
    
    s3_bucket_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketArn') }})
    s3_config: S3Config = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Config') }})
    agent_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentArns') }})
    s3_storage_class: Optional[S3StorageClassEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3StorageClass') }})
    subdirectory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    tags: Optional[List[TagListEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
