from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PortRange:
    max_range: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxRange' }})
    min_range: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinRange' }})
    
