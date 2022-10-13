from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userpooldescriptiontype


@dataclass_json
@dataclass
class ListUserPoolsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    user_pools: Optional[List[userpooldescriptiontype.UserPoolDescriptionType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPools' }})
    
