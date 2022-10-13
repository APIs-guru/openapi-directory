from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datastorepartition


@dataclass_json
@dataclass
class DatastorePartitions:
    partitions: Optional[List[datastorepartition.DatastorePartition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitions' }})
    
