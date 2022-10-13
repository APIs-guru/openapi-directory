from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import healthstatus_enum
from . import managedagent
from . import networkbinding
from . import networkinterface


@dataclass_json
@dataclass
class Container:
    container_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerArn' }})
    cpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu' }})
    exit_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exitCode' }})
    gpu_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gpuIds' }})
    health_status: Optional[healthstatus_enum.HealthStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthStatus' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageDigest' }})
    last_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStatus' }})
    managed_agents: Optional[List[managedagent.ManagedAgent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedAgents' }})
    memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    memory_reservation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryReservation' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_bindings: Optional[List[networkbinding.NetworkBinding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkBindings' }})
    network_interfaces: Optional[List[networkinterface.NetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkInterfaces' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    runtime_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeId' }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskArn' }})
    
