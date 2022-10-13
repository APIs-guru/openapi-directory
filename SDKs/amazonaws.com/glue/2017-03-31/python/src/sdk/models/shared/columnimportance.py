from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ColumnImportance:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnName' }})
    importance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Importance' }})
    
