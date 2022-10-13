from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Notifications:
    completed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Completed' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    progressing: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Progressing' }})
    warning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Warning' }})
    
