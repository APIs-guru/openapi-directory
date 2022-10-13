from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChangePasswordRequest:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    previous_password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreviousPassword' }})
    proposed_password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProposedPassword' }})
    
