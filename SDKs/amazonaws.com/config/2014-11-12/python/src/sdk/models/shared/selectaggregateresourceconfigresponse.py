from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import queryinfo


@dataclass_json
@dataclass
class SelectAggregateResourceConfigResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    query_info: Optional[queryinfo.QueryInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryInfo' }})
    results: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Results' }})
    
