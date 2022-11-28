from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateServiceRequest:
    service_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    capacity_provider_strategy: Optional[List[CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviderStrategy') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    deployment_configuration: Optional[DeploymentConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfiguration') }})
    deployment_controller: Optional[DeploymentController] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentController') }})
    desired_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredCount') }})
    enable_ecs_managed_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableECSManagedTags') }})
    enable_execute_command: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableExecuteCommand') }})
    health_check_grace_period_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheckGracePeriodSeconds') }})
    launch_type: Optional[LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchType') }})
    load_balancers: Optional[List[LoadBalancer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancers') }})
    network_configuration: Optional[NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfiguration') }})
    placement_constraints: Optional[List[PlacementConstraint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementConstraints') }})
    placement_strategy: Optional[List[PlacementStrategy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementStrategy') }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformVersion') }})
    propagate_tags: Optional[PropagateTagsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propagateTags') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    scheduling_strategy: Optional[SchedulingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulingStrategy') }})
    service_registries: Optional[List[ServiceRegistry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRegistries') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    task_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskDefinition') }})
    
