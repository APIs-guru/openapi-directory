from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import capacityproviderstrategyitem
from . import deploymentconfiguration
from . import deploymentcontroller
from . import deployment
from . import serviceevent
from . import launchtype_enum
from . import loadbalancer
from . import networkconfiguration
from . import placementconstraint
from . import placementstrategy
from . import propagatetags_enum
from . import schedulingstrategy_enum
from . import serviceregistry
from . import tag
from . import taskset


@dataclass_json
@dataclass
class Service:
    capacity_provider_strategy: Optional[List[capacityproviderstrategyitem.CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityProviderStrategy' }})
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterArn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    deployment_configuration: Optional[deploymentconfiguration.DeploymentConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentConfiguration' }})
    deployment_controller: Optional[deploymentcontroller.DeploymentController] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentController' }})
    deployments: Optional[List[deployment.Deployment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployments' }})
    desired_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredCount' }})
    enable_ecs_managed_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableECSManagedTags' }})
    enable_execute_command: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableExecuteCommand' }})
    events: Optional[List[serviceevent.ServiceEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    health_check_grace_period_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheckGracePeriodSeconds' }})
    launch_type: Optional[launchtype_enum.LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchType' }})
    load_balancers: Optional[List[loadbalancer.LoadBalancer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancers' }})
    network_configuration: Optional[networkconfiguration.NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfiguration' }})
    pending_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingCount' }})
    placement_constraints: Optional[List[placementconstraint.PlacementConstraint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementConstraints' }})
    placement_strategy: Optional[List[placementstrategy.PlacementStrategy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementStrategy' }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformVersion' }})
    propagate_tags: Optional[propagatetags_enum.PropagateTagsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propagateTags' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    running_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runningCount' }})
    scheduling_strategy: Optional[schedulingstrategy_enum.SchedulingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedulingStrategy' }})
    service_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceArn' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    service_registries: Optional[List[serviceregistry.ServiceRegistry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRegistries' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    task_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskDefinition' }})
    task_sets: Optional[List[taskset.TaskSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskSets' }})
    
