from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import scale


@dataclass_json
@dataclass
class UpdateTaskSetRequest:
    cluster: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    scale: scale.Scale = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scale' }})
    service: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    task_set: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskSet' }})
    
