from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import session


@dataclass_json
@dataclass
class ExecuteCommandResponse:
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterArn' }})
    container_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerArn' }})
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerName' }})
    interactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactive' }})
    session: Optional[session.Session] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session' }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskArn' }})
    
