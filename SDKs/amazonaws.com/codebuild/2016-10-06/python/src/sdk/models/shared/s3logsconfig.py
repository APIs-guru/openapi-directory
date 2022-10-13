from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import bucketowneraccess_enum
from . import logsconfigstatustype_enum


@dataclass_json
@dataclass
class S3LogsConfig:
    bucket_owner_access: Optional[bucketowneraccess_enum.BucketOwnerAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketOwnerAccess' }})
    encryption_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionDisabled' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    status: logsconfigstatustype_enum.LogsConfigStatusTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
