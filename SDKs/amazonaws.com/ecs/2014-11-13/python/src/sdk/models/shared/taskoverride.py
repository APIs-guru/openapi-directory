from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import containeroverride
from . import ephemeralstorage
from . import inferenceacceleratoroverride


@dataclass_json
@dataclass
class TaskOverride:
    container_overrides: Optional[List[containeroverride.ContainerOverride]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerOverrides' }})
    cpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu' }})
    ephemeral_storage: Optional[ephemeralstorage.EphemeralStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ephemeralStorage' }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionRoleArn' }})
    inference_accelerator_overrides: Optional[List[inferenceacceleratoroverride.InferenceAcceleratorOverride]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inferenceAcceleratorOverrides' }})
    memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    task_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskRoleArn' }})
    
