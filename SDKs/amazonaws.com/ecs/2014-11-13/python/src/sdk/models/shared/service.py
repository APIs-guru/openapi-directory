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
class Service:
    r"""Service
    Details on a service within a cluster
    """
    
    capacity_provider_strategy: Optional[List[CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviderStrategy') }})
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterArn') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    deployment_configuration: Optional[DeploymentConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfiguration') }})
    deployment_controller: Optional[DeploymentController] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentController') }})
    deployments: Optional[List[Deployment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments') }})
    desired_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredCount') }})
    enable_ecs_managed_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableECSManagedTags') }})
    enable_execute_command: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableExecuteCommand') }})
    events: Optional[List[ServiceEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    health_check_grace_period_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheckGracePeriodSeconds') }})
    launch_type: Optional[LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchType') }})
    load_balancers: Optional[List[LoadBalancer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancers') }})
    network_configuration: Optional[NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfiguration') }})
    pending_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingCount') }})
    placement_constraints: Optional[List[PlacementConstraint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementConstraints') }})
    placement_strategy: Optional[List[PlacementStrategy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementStrategy') }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformVersion') }})
    propagate_tags: Optional[PropagateTagsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propagateTags') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    running_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runningCount') }})
    scheduling_strategy: Optional[SchedulingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulingStrategy') }})
    service_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceArn') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    service_registries: Optional[List[ServiceRegistry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRegistries') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    task_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskDefinition') }})
    task_sets: Optional[List[TaskSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSets') }})
    
