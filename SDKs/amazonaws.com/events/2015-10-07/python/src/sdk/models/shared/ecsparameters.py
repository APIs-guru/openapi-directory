from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import capacityproviderstrategyitem
from . import launchtype_enum
from . import networkconfiguration
from . import placementconstraint
from . import placementstrategy
from . import propagatetags_enum
from . import tag


@dataclass_json
@dataclass
class EcsParameters:
    capacity_provider_strategy: Optional[List[capacityproviderstrategyitem.CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CapacityProviderStrategy' }})
    enable_ecs_managed_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableECSManagedTags' }})
    enable_execute_command: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableExecuteCommand' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Group' }})
    launch_type: Optional[launchtype_enum.LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchType' }})
    network_configuration: Optional[networkconfiguration.NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkConfiguration' }})
    placement_constraints: Optional[List[placementconstraint.PlacementConstraint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlacementConstraints' }})
    placement_strategy: Optional[List[placementstrategy.PlacementStrategy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlacementStrategy' }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlatformVersion' }})
    propagate_tags: Optional[propagatetags_enum.PropagateTagsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PropagateTags' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceId' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    task_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskCount' }})
    task_definition_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskDefinitionArn' }})
    
