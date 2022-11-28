from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RunTaskRequest:
    task_definition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskDefinition') }})
    capacity_provider_strategy: Optional[List[CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviderStrategy') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    enable_ecs_managed_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableECSManagedTags') }})
    enable_execute_command: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableExecuteCommand') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    launch_type: Optional[LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchType') }})
    network_configuration: Optional[NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfiguration') }})
    overrides: Optional[TaskOverride] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrides') }})
    placement_constraints: Optional[List[PlacementConstraint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementConstraints') }})
    placement_strategy: Optional[List[PlacementStrategy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementStrategy') }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformVersion') }})
    propagate_tags: Optional[PropagateTagsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propagateTags') }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceId') }})
    started_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedBy') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
