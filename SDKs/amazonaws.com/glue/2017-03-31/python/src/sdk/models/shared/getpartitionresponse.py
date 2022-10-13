from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import partition


@dataclass_json
@dataclass
class GetPartitionResponse:
    partition: Optional[partition.Partition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Partition' }})
    
