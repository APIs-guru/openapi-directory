from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetVaultLockOutput:
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationDate' }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policy' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
