from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DmsTransferSettings:
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketName' }})
    service_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceAccessRoleArn' }})
    
