from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListNamedQueriesOutput:
    named_query_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NamedQueryIds' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
