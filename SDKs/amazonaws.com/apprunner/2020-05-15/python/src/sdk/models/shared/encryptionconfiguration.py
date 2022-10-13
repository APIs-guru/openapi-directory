from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EncryptionConfiguration:
    kms_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKey' }})
    
