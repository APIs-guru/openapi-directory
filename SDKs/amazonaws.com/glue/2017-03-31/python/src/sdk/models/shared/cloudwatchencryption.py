from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchencryptionmode_enum


@dataclass_json
@dataclass
class CloudWatchEncryption:
    cloud_watch_encryption_mode: Optional[cloudwatchencryptionmode_enum.CloudWatchEncryptionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchEncryptionMode' }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyArn' }})
    
