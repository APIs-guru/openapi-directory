from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import grant
from . import cannedacl_enum
from . import encryption
from . import storageclass_enum


@dataclass_json
@dataclass
class S3Location:
    access_control_list: Optional[List[grant.Grant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessControlList' }})
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketName' }})
    canned_acl: Optional[cannedacl_enum.CannedACLEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CannedACL' }})
    encryption: Optional[encryption.Encryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encryption' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Prefix' }})
    storage_class: Optional[storageclass_enum.StorageClassEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageClass' }})
    tagging: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tagging' }})
    user_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserMetadata' }})
    
