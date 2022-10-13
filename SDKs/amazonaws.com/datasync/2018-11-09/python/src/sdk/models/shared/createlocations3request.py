from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import s3config
from . import s3storageclass_enum
from . import taglistentry


@dataclass_json
@dataclass
class CreateLocationS3Request:
    agent_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentArns' }})
    s3_bucket_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketArn' }})
    s3_config: s3config.S3Config = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Config' }})
    s3_storage_class: Optional[s3storageclass_enum.S3StorageClassEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3StorageClass' }})
    subdirectory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subdirectory' }})
    tags: Optional[List[taglistentry.TagListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
