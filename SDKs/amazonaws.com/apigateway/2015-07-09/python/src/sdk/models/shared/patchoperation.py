from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import op_enum


@dataclass_json
@dataclass
class PatchOperation:
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    op: Optional[op_enum.OpEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'op' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
