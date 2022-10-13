from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Table:
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableId' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableName' }})
    
