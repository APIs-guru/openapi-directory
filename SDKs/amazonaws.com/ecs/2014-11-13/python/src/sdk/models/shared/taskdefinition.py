from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskDefinition:
    r"""TaskDefinition
    The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.
    """
    
    compatibilities: Optional[List[CompatibilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibilities') }})
    container_definitions: Optional[List[ContainerDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerDefinitions') }})
    cpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    deregistered_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deregisteredAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ephemeral_storage: Optional[EphemeralStorage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ephemeralStorage') }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRoleArn') }})
    family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('family') }})
    inference_accelerators: Optional[List[InferenceAccelerator]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inferenceAccelerators') }})
    ipc_mode: Optional[IpcModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipcMode') }})
    memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    network_mode: Optional[NetworkModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkMode') }})
    pid_mode: Optional[PidModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pidMode') }})
    placement_constraints: Optional[List[TaskDefinitionPlacementConstraint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementConstraints') }})
    proxy_configuration: Optional[ProxyConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyConfiguration') }})
    registered_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registeredAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    registered_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registeredBy') }})
    requires_attributes: Optional[List[Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiresAttributes') }})
    requires_compatibilities: Optional[List[CompatibilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiresCompatibilities') }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    status: Optional[TaskDefinitionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    task_definition_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskDefinitionArn') }})
    task_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskRoleArn') }})
    volumes: Optional[List[Volume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
