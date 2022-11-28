from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3LogsConfig:
    r"""S3LogsConfig
     Information about S3 logs for a build project. 
    """
    
    status: LogsConfigStatusTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    bucket_owner_access: Optional[BucketOwnerAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketOwnerAccess') }})
    encryption_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionDisabled') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
