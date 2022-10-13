from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EncryptionConfig:
    kms_key_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSKeyArn' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    
