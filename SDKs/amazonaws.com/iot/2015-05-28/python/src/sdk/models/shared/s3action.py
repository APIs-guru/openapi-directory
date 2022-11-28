from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3Action:
    r"""S3Action
    Describes an action to write data to an Amazon S3 bucket.
    """
    
    bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    canned_acl: Optional[CannedAccessControlListEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cannedAcl') }})
    
