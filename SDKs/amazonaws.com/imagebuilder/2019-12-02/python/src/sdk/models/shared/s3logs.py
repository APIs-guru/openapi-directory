from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3Logs:
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3BucketName' }})
    s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3KeyPrefix' }})
    
