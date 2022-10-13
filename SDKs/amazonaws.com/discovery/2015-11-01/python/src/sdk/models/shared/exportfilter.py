from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExportFilter:
    condition: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
