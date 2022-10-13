from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Command:
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Args' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    script_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScriptPath' }})
    
