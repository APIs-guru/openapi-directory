from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RunCommandTarget:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
