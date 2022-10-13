from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connection


@dataclass_json
@dataclass
class DescribeConnectionsResponse:
    connections: Optional[List[connection.Connection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Connections' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    
