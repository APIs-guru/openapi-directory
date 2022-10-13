from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ComputeCapacityStatus:
    available: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Available' }})
    desired: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Desired' }})
    in_use: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InUse' }})
    running: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Running' }})
    
