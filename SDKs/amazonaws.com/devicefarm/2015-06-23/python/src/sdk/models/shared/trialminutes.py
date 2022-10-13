from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TrialMinutes:
    remaining: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remaining' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
