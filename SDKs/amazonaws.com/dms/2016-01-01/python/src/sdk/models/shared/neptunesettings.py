from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NeptuneSettings:
    error_retry_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorRetryDuration' }})
    iam_auth_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamAuthEnabled' }})
    max_file_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxFileSize' }})
    max_retry_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxRetryCount' }})
    s3_bucket_folder: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketFolder' }})
    s3_bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketName' }})
    service_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceAccessRoleArn' }})
    
