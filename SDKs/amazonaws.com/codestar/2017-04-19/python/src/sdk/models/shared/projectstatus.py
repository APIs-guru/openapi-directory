from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProjectStatus:
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
