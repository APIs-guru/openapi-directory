from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomRule:
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
