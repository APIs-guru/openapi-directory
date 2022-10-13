from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3Config:
    bucket_access_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketAccessRoleArn' }})
    
