from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeletePartitionIndexRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    index_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
