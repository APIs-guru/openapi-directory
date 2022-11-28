from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EcsParameters:
    r"""EcsParameters
    The custom parameters to be used when the target is an Amazon ECS task.
    """
    
    task_definition_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskDefinitionArn') }})
    capacity_provider_strategy: Optional[List[CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CapacityProviderStrategy') }})
    enable_ecs_managed_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableECSManagedTags') }})
    enable_execute_command: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableExecuteCommand') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Group') }})
    launch_type: Optional[LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchType') }})
    network_configuration: Optional[NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConfiguration') }})
    placement_constraints: Optional[List[PlacementConstraint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementConstraints') }})
    placement_strategy: Optional[List[PlacementStrategy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementStrategy') }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlatformVersion') }})
    propagate_tags: Optional[PropagateTagsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropagateTags') }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceId') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    task_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskCount') }})
    
