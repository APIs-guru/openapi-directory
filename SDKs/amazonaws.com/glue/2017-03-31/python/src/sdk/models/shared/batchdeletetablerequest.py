from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchDeleteTableRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    tables_to_delete: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TablesToDelete' }})
    
