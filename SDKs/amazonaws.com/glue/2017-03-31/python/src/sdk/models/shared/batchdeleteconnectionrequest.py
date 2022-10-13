from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchDeleteConnectionRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    connection_name_list: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionNameList' }})
    
