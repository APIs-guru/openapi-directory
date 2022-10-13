from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import partitionvaluelist


@dataclass_json
@dataclass
class BatchGetPartitionRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    partitions_to_get: List[partitionvaluelist.PartitionValueList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionsToGet' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
