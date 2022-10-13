from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteTaskSetRequest:
    cluster: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'force' }})
    service: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    task_set: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskSet' }})
    
