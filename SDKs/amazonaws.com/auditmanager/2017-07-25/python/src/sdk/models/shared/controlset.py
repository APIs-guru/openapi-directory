from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import control


@dataclass_json
@dataclass
class ControlSet:
    controls: Optional[List[control.Control]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controls' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
