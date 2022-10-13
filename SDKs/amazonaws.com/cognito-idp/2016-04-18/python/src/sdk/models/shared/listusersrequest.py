from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListUsersRequest:
    attributes_to_get: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributesToGet' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filter' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaginationToken' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
