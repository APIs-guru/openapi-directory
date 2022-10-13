from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourceserverscopetype


@dataclass_json
@dataclass
class UpdateResourceServerRequest:
    identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identifier' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scopes: Optional[List[resourceserverscopetype.ResourceServerScopeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Scopes' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
