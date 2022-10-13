from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attachment
from . import attribute
from . import connectivity_enum
from . import container
from . import ephemeralstorage
from . import healthstatus_enum
from . import inferenceaccelerator
from . import launchtype_enum
from . import taskoverride
from . import taskstopcode_enum
from . import tag


@dataclass_json
@dataclass
class Task:
    attachments: Optional[List[attachment.Attachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    attributes: Optional[List[attribute.Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityZone' }})
    capacity_provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityProviderName' }})
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterArn' }})
    connectivity: Optional[connectivity_enum.ConnectivityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectivity' }})
    connectivity_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectivityAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    container_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerInstanceArn' }})
    containers: Optional[List[container.Container]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containers' }})
    cpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    desired_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredStatus' }})
    enable_execute_command: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableExecuteCommand' }})
    ephemeral_storage: Optional[ephemeralstorage.EphemeralStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ephemeralStorage' }})
    execution_stopped_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStoppedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    health_status: Optional[healthstatus_enum.HealthStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthStatus' }})
    inference_accelerators: Optional[List[inferenceaccelerator.InferenceAccelerator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inferenceAccelerators' }})
    last_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStatus' }})
    launch_type: Optional[launchtype_enum.LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchType' }})
    memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    overrides: Optional[taskoverride.TaskOverride] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrides' }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformVersion' }})
    pull_started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullStartedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pull_stopped_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullStoppedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    started_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedBy' }})
    stop_code: Optional[taskstopcode_enum.TaskStopCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopCode' }})
    stopped_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stoppedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stopped_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stoppedReason' }})
    stopping_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stoppingAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskArn' }})
    task_definition_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskDefinitionArn' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
