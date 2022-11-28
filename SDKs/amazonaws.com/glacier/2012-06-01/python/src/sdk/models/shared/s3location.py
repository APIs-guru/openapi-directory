from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3Location:
    r"""S3Location
    Contains information about the location in Amazon S3 where the select job results are stored.
    """
    
    access_control_list: Optional[List[Grant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessControlList') }})
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketName') }})
    canned_acl: Optional[CannedACLEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CannedACL') }})
    encryption: Optional[Encryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encryption') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    storage_class: Optional[StorageClassEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageClass') }})
    tagging: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tagging') }})
    user_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserMetadata') }})
    
