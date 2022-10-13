from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import partition
from . import partitionvaluelist


@dataclass_json
@dataclass
class BatchGetPartitionResponse:
    partitions: Optional[List[partition.Partition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Partitions' }})
    unprocessed_keys: Optional[List[partitionvaluelist.PartitionValueList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedKeys' }})
    
