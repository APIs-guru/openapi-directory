from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScalableTargetAction:
    max_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxCapacity' }})
    min_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinCapacity' }})
    
