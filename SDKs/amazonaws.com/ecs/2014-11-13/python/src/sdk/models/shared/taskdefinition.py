from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import compatibility_enum
from . import containerdefinition
from . import ephemeralstorage
from . import inferenceaccelerator
from . import ipcmode_enum
from . import networkmode_enum
from . import pidmode_enum
from . import taskdefinitionplacementconstraint
from . import proxyconfiguration
from . import attribute
from . import compatibility_enum
from . import taskdefinitionstatus_enum
from . import volume


@dataclass_json
@dataclass
class TaskDefinition:
    compatibilities: Optional[List[compatibility_enum.CompatibilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibilities' }})
    container_definitions: Optional[List[containerdefinition.ContainerDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerDefinitions' }})
    cpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu' }})
    deregistered_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deregisteredAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ephemeral_storage: Optional[ephemeralstorage.EphemeralStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ephemeralStorage' }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionRoleArn' }})
    family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family' }})
    inference_accelerators: Optional[List[inferenceaccelerator.InferenceAccelerator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inferenceAccelerators' }})
    ipc_mode: Optional[ipcmode_enum.IpcModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipcMode' }})
    memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    network_mode: Optional[networkmode_enum.NetworkModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkMode' }})
    pid_mode: Optional[pidmode_enum.PidModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pidMode' }})
    placement_constraints: Optional[List[taskdefinitionplacementconstraint.TaskDefinitionPlacementConstraint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementConstraints' }})
    proxy_configuration: Optional[proxyconfiguration.ProxyConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxyConfiguration' }})
    registered_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registeredAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    registered_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registeredBy' }})
    requires_attributes: Optional[List[attribute.Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiresAttributes' }})
    requires_compatibilities: Optional[List[compatibility_enum.CompatibilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiresCompatibilities' }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    status: Optional[taskdefinitionstatus_enum.TaskDefinitionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    task_definition_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskDefinitionArn' }})
    task_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskRoleArn' }})
    volumes: Optional[List[volume.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    
