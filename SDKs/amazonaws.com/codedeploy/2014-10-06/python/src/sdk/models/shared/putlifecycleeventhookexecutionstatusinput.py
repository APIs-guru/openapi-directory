from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lifecycleeventstatus_enum


@dataclass_json
@dataclass
class PutLifecycleEventHookExecutionStatusInput:
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentId' }})
    lifecycle_event_hook_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycleEventHookExecutionId' }})
    status: Optional[lifecycleeventstatus_enum.LifecycleEventStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
