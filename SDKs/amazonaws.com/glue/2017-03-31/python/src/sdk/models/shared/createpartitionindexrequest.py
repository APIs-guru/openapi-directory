from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import partitionindex


@dataclass_json
@dataclass
class CreatePartitionIndexRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    partition_index: partitionindex.PartitionIndex = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionIndex' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
