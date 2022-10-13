from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import control


@dataclass_json
@dataclass
class GetControlResponse:
    control: Optional[control.Control] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'control' }})
    
