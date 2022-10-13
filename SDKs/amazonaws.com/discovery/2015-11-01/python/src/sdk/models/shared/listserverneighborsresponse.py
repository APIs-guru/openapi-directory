from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import neighborconnectiondetail


@dataclass_json
@dataclass
class ListServerNeighborsResponse:
    known_dependency_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'knownDependencyCount' }})
    neighbors: List[neighborconnectiondetail.NeighborConnectionDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'neighbors' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
