from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Container:
    r"""Container
    A Docker container that is part of a task.
    """
    
    container_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerArn') }})
    cpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    exit_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCode') }})
    gpu_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gpuIds') }})
    health_status: Optional[HealthStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthStatus') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageDigest') }})
    last_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastStatus') }})
    managed_agents: Optional[List[ManagedAgent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedAgents') }})
    memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    memory_reservation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryReservation') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_bindings: Optional[List[NetworkBinding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkBindings') }})
    network_interfaces: Optional[List[NetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    runtime_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeId') }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskArn') }})
    
