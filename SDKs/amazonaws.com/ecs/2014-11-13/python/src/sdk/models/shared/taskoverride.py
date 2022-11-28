from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskOverride:
    r"""TaskOverride
    The overrides associated with a task.
    """
    
    container_overrides: Optional[List[ContainerOverride]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerOverrides') }})
    cpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    ephemeral_storage: Optional[EphemeralStorage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ephemeralStorage') }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRoleArn') }})
    inference_accelerator_overrides: Optional[List[InferenceAcceleratorOverride]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inferenceAcceleratorOverrides') }})
    memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    task_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskRoleArn') }})
    
