from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BackendAuthAppleProviderConfig:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivateKey' }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TeamId' }})
    
