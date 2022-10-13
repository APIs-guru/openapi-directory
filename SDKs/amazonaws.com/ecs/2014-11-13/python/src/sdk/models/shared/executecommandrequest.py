from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExecuteCommandRequest:
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    interactive: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactive' }})
    task: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task' }})
    
