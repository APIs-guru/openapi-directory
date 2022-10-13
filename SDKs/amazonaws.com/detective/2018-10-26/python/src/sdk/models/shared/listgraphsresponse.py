from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import graph


@dataclass_json
@dataclass
class ListGraphsResponse:
    graph_list: Optional[List[graph.Graph]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GraphList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
