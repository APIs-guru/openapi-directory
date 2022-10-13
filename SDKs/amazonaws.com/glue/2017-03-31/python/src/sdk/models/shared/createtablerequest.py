from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import partitionindex
from . import tableinput


@dataclass_json
@dataclass
class CreateTableRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    partition_indexes: Optional[List[partitionindex.PartitionIndex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionIndexes' }})
    table_input: tableinput.TableInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableInput' }})
    
