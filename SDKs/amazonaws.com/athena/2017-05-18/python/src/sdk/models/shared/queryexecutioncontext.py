from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QueryExecutionContext:
    catalog: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Catalog' }})
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Database' }})
    
