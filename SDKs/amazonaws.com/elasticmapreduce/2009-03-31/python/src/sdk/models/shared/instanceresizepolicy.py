from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstanceResizePolicy:
    instance_termination_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceTerminationTimeout' }})
    instances_to_protect: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstancesToProtect' }})
    instances_to_terminate: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstancesToTerminate' }})
    
