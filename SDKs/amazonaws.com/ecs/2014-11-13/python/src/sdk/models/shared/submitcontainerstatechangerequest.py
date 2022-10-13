from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import networkbinding


@dataclass_json
@dataclass
class SubmitContainerStateChangeRequest:
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerName' }})
    exit_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exitCode' }})
    network_bindings: Optional[List[networkbinding.NetworkBinding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkBindings' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    runtime_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeId' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    task: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task' }})
    
