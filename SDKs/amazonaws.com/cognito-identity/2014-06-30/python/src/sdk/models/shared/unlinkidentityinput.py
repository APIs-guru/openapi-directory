from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UnlinkIdentityInput:
    identity_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityId' }})
    logins: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Logins' }})
    logins_to_remove: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoginsToRemove' }})
    
