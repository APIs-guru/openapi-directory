from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventtypesummary


@dataclass_json
@dataclass
class ListEventTypesResult:
    event_types: Optional[List[eventtypesummary.EventTypeSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventTypes' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
