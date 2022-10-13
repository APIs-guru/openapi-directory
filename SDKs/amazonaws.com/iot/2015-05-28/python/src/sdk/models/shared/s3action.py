from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cannedaccesscontrollist_enum


@dataclass_json
@dataclass
class S3Action:
    bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    canned_acl: Optional[cannedaccesscontrollist_enum.CannedAccessControlListEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cannedAcl' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
