from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserPoolClientDescription:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    client_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientName' }})
    user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
