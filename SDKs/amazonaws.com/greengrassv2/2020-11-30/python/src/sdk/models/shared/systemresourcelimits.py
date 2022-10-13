from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SystemResourceLimits:
    cpus: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpus' }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    
