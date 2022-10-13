from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Order:
    column: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Column' }})
    sort_order: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    
