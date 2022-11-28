from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartTaskRequest:
    container_instances: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerInstances') }})
    task_definition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskDefinition') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    enable_ecs_managed_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableECSManagedTags') }})
    enable_execute_command: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableExecuteCommand') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    network_configuration: Optional[NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfiguration') }})
    overrides: Optional[TaskOverride] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrides') }})
    propagate_tags: Optional[PropagateTagsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propagateTags') }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceId') }})
    started_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedBy') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
