from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CodeGenEdge:
    source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    target: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    target_parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetParameter' }})
    
