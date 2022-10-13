from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScalingConstraints:
    max_capacity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxCapacity' }})
    min_capacity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinCapacity' }})
    
