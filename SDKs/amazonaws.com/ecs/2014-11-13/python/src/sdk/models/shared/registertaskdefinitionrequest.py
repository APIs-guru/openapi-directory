from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegisterTaskDefinitionRequest:
    container_definitions: List[ContainerDefinition] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerDefinitions') }})
    family: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('family') }})
    cpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    ephemeral_storage: Optional[EphemeralStorage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ephemeralStorage') }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRoleArn') }})
    inference_accelerators: Optional[List[InferenceAccelerator]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inferenceAccelerators') }})
    ipc_mode: Optional[IpcModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipcMode') }})
    memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    network_mode: Optional[NetworkModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkMode') }})
    pid_mode: Optional[PidModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pidMode') }})
    placement_constraints: Optional[List[TaskDefinitionPlacementConstraint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementConstraints') }})
    proxy_configuration: Optional[ProxyConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyConfiguration') }})
    requires_compatibilities: Optional[List[CompatibilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiresCompatibilities') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    task_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskRoleArn') }})
    volumes: Optional[List[Volume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
