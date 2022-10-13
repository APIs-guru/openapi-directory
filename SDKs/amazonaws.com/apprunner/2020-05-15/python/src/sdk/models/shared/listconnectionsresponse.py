from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connectionsummary


@dataclass_json
@dataclass
class ListConnectionsResponse:
    connection_summary_list: List[connectionsummary.ConnectionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
