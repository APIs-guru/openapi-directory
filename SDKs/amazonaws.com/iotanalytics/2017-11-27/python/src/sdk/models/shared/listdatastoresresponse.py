from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datastoresummary


@dataclass_json
@dataclass
class ListDatastoresResponse:
    datastore_summaries: Optional[List[datastoresummary.DatastoreSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastoreSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
