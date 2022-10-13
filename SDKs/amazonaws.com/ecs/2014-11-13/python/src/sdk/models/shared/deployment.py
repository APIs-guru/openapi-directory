from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import capacityproviderstrategyitem
from . import launchtype_enum
from . import networkconfiguration
from . import deploymentrolloutstate_enum


@dataclass_json
@dataclass
class Deployment:
    capacity_provider_strategy: Optional[List[capacityproviderstrategyitem.CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityProviderStrategy' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    desired_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredCount' }})
    failed_tasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedTasks' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    launch_type: Optional[launchtype_enum.LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchType' }})
    network_configuration: Optional[networkconfiguration.NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfiguration' }})
    pending_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingCount' }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformVersion' }})
    rollout_state: Optional[deploymentrolloutstate_enum.DeploymentRolloutStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutState' }})
    rollout_state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutStateReason' }})
    running_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runningCount' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    task_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskDefinition' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
