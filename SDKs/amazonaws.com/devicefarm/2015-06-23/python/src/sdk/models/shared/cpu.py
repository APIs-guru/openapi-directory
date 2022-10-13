from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CPU:
    architecture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'architecture' }})
    clock: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clock' }})
    frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    
