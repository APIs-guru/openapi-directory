from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Account:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    email_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailAddress' }})
    
