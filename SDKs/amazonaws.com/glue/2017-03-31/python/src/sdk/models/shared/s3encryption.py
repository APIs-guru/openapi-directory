from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import s3encryptionmode_enum


@dataclass_json
@dataclass
class S3Encryption:
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyArn' }})
    s3_encryption_mode: Optional[s3encryptionmode_enum.S3EncryptionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3EncryptionMode' }})
    
