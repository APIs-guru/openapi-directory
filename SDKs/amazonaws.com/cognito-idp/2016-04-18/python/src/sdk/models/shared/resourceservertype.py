from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourceserverscopetype


@dataclass_json
@dataclass
class ResourceServerType:
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identifier' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scopes: Optional[List[resourceserverscopetype.ResourceServerScopeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Scopes' }})
    user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
