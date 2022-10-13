from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WeightedTarget:
    virtual_node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualNode' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
