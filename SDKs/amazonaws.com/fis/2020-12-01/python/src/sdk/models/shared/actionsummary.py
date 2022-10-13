from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import actiontarget


@dataclass_json
@dataclass
class ActionSummary:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    targets: Optional[dict[str, actiontarget.ActionTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    
