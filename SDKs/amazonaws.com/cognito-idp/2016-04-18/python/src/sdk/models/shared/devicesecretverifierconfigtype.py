from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceSecretVerifierConfigType:
    password_verifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PasswordVerifier' }})
    salt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Salt' }})
    
