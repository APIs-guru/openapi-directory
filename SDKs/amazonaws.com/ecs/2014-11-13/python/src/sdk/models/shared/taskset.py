from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import capacityproviderstrategyitem
from . import launchtype_enum
from . import loadbalancer
from . import networkconfiguration
from . import scale
from . import serviceregistry
from . import stabilitystatus_enum
from . import tag


@dataclass_json
@dataclass
class TaskSet:
    capacity_provider_strategy: Optional[List[capacityproviderstrategyitem.CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityProviderStrategy' }})
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterArn' }})
    computed_desired_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computedDesiredCount' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    launch_type: Optional[launchtype_enum.LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchType' }})
    load_balancers: Optional[List[loadbalancer.LoadBalancer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancers' }})
    network_configuration: Optional[networkconfiguration.NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfiguration' }})
    pending_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingCount' }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformVersion' }})
    running_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runningCount' }})
    scale: Optional[scale.Scale] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scale' }})
    service_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceArn' }})
    service_registries: Optional[List[serviceregistry.ServiceRegistry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRegistries' }})
    stability_status: Optional[stabilitystatus_enum.StabilityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stabilityStatus' }})
    stability_status_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stabilityStatusAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    started_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedBy' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    task_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskDefinition' }})
    task_set_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskSetArn' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
