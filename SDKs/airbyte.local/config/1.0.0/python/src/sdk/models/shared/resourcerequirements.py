from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResourceRequirements:
    cpu_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu_limit' }})
    cpu_request: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu_request' }})
    memory_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory_limit' }})
    memory_request: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory_request' }})
    
