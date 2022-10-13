from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policy


@dataclass_json
@dataclass
class Allowed:
    policies: Optional[List[policy.Policy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    
