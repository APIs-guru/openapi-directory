from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instanceidentity


@dataclass_json
@dataclass
class PollForTaskInput:
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    instance_identity: Optional[instanceidentity.InstanceIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceIdentity' }})
    worker_group: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerGroup' }})
    
