from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DebugSession:
    session_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionEnabled' }})
    session_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionTarget' }})
    
