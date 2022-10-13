from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import usertype


@dataclass_json
@dataclass
class ListUsersResponse:
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaginationToken' }})
    users: Optional[List[usertype.UserType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Users' }})
    
