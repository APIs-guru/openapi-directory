from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteImagePermissionsRequest:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    shared_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedAccountId' }})
    
