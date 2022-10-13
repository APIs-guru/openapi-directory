from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WeightedTarget:
    virtual_node: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualNode' }})
    weight: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
