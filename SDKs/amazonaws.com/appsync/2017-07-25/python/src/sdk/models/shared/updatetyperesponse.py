from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import type


@dataclass_json
@dataclass
class UpdateTypeResponse:
    type: Optional[type.Type] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
