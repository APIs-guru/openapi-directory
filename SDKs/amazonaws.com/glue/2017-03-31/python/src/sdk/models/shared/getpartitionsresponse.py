from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import partition


@dataclass_json
@dataclass
class GetPartitionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    partitions: Optional[List[partition.Partition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Partitions' }})
    
