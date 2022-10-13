from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import capacityproviderstrategyitem
from . import launchtype_enum
from . import networkconfiguration
from . import taskoverride
from . import placementconstraint
from . import placementstrategy
from . import propagatetags_enum
from . import tag


@dataclass_json
@dataclass
class RunTaskRequest:
    capacity_provider_strategy: Optional[List[capacityproviderstrategyitem.CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityProviderStrategy' }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    enable_ecs_managed_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableECSManagedTags' }})
    enable_execute_command: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableExecuteCommand' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    launch_type: Optional[launchtype_enum.LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchType' }})
    network_configuration: Optional[networkconfiguration.NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfiguration' }})
    overrides: Optional[taskoverride.TaskOverride] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrides' }})
    placement_constraints: Optional[List[placementconstraint.PlacementConstraint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementConstraints' }})
    placement_strategy: Optional[List[placementstrategy.PlacementStrategy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementStrategy' }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformVersion' }})
    propagate_tags: Optional[propagatetags_enum.PropagateTagsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propagateTags' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceId' }})
    started_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedBy' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    task_definition: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskDefinition' }})
    
