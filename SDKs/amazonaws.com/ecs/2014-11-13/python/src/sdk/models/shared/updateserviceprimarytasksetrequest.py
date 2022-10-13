from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateServicePrimaryTaskSetRequest:
    cluster: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    primary_task_set: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryTaskSet' }})
    service: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    
