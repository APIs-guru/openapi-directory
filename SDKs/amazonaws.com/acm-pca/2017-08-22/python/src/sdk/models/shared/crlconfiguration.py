from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import s3objectacl_enum


@dataclass_json
@dataclass
class CrlConfiguration:
    custom_cname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomCname' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    expiration_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationInDays' }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketName' }})
    s3_object_acl: Optional[s3objectacl_enum.S3ObjectACLEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ObjectAcl' }})
    
