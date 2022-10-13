from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Ulimit:
    hard_limit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hardLimit' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    soft_limit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'softLimit' }})
    
