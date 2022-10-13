from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import storedquerymetadata


@dataclass_json
@dataclass
class ListStoredQueriesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    stored_query_metadata: Optional[List[storedquerymetadata.StoredQueryMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoredQueryMetadata' }})
    
