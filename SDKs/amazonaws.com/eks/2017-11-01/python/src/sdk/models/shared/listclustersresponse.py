from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListClustersResponse:
    clusters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusters' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
