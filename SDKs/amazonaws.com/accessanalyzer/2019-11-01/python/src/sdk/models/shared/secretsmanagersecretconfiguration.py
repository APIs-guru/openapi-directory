from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SecretsManagerSecretConfiguration:
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyId' }})
    secret_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretPolicy' }})
    
