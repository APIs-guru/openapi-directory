from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetDataflowGraphRequest:
    python_script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PythonScript' }})
    
