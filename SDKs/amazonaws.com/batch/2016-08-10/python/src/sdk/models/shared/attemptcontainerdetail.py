from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import networkinterface


@dataclass_json
@dataclass
class AttemptContainerDetail:
    container_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerInstanceArn' }})
    exit_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exitCode' }})
    log_stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logStreamName' }})
    network_interfaces: Optional[List[networkinterface.NetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkInterfaces' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskArn' }})
    
