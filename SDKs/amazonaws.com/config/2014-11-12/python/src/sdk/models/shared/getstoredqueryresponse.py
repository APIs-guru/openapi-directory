from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import storedquery


@dataclass_json
@dataclass
class GetStoredQueryResponse:
    stored_query: Optional[storedquery.StoredQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoredQuery' }})
    
