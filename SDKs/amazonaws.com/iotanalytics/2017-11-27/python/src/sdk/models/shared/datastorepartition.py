from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import partition
from . import timestamppartition


@dataclass_json
@dataclass
class DatastorePartition:
    attribute_partition: Optional[partition.Partition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributePartition' }})
    timestamp_partition: Optional[timestamppartition.TimestampPartition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampPartition' }})
    
