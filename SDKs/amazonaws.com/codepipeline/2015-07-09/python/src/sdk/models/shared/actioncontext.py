from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActionContext:
    action_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionExecutionId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
