from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JobCommand:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    python_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PythonVersion' }})
    script_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScriptLocation' }})
    
