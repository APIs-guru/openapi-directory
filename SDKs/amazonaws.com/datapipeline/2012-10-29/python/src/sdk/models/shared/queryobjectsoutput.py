from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QueryObjectsOutput:
    has_more_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasMoreResults' }})
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marker' }})
    
