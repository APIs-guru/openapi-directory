from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Filter:
    context_row_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextRowId' }})
    formula: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formula' }})
    
