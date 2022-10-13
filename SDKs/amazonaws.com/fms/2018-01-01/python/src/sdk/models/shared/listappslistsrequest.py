from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListAppsListsRequest:
    default_lists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultLists' }})
    max_results: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
