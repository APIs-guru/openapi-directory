from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListUserImportJobsRequest:
    max_results: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaginationToken' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
