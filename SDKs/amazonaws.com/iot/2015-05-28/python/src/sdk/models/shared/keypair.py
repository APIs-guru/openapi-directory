from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KeyPair:
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivateKey' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicKey' }})
    
