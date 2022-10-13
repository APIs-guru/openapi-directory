from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import identitypoolusage


@dataclass_json
@dataclass
class ListIdentityPoolUsageResponse:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    identity_pool_usages: Optional[List[identitypoolusage.IdentityPoolUsage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolUsages' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
