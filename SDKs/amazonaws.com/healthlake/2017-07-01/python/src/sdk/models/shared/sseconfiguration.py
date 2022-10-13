from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import kmsencryptionconfig


@dataclass_json
@dataclass
class SseConfiguration:
    kms_encryption_config: kmsencryptionconfig.KmsEncryptionConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsEncryptionConfig' }})
    
