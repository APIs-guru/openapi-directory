from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import networkconfiguration
from . import taskoverride
from . import propagatetags_enum
from . import tag


@dataclass_json
@dataclass
class StartTaskRequest:
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    container_instances: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerInstances' }})
    enable_ecs_managed_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableECSManagedTags' }})
    enable_execute_command: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableExecuteCommand' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    network_configuration: Optional[networkconfiguration.NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfiguration' }})
    overrides: Optional[taskoverride.TaskOverride] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrides' }})
    propagate_tags: Optional[propagatetags_enum.PropagateTagsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propagateTags' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceId' }})
    started_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedBy' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    task_definition: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskDefinition' }})
    
