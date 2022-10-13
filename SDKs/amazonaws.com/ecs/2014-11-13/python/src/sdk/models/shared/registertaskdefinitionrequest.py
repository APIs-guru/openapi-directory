from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import containerdefinition
from . import ephemeralstorage
from . import inferenceaccelerator
from . import ipcmode_enum
from . import networkmode_enum
from . import pidmode_enum
from . import taskdefinitionplacementconstraint
from . import proxyconfiguration
from . import compatibility_enum
from . import tag
from . import volume


@dataclass_json
@dataclass
class RegisterTaskDefinitionRequest:
    container_definitions: List[containerdefinition.ContainerDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerDefinitions' }})
    cpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu' }})
    ephemeral_storage: Optional[ephemeralstorage.EphemeralStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ephemeralStorage' }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionRoleArn' }})
    family: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family' }})
    inference_accelerators: Optional[List[inferenceaccelerator.InferenceAccelerator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inferenceAccelerators' }})
    ipc_mode: Optional[ipcmode_enum.IpcModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipcMode' }})
    memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    network_mode: Optional[networkmode_enum.NetworkModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkMode' }})
    pid_mode: Optional[pidmode_enum.PidModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pidMode' }})
    placement_constraints: Optional[List[taskdefinitionplacementconstraint.TaskDefinitionPlacementConstraint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementConstraints' }})
    proxy_configuration: Optional[proxyconfiguration.ProxyConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxyConfiguration' }})
    requires_compatibilities: Optional[List[compatibility_enum.CompatibilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiresCompatibilities' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    task_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskRoleArn' }})
    volumes: Optional[List[volume.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    
