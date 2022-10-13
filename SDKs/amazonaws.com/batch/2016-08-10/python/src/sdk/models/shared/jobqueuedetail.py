from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import computeenvironmentorder
from . import jqstate_enum
from . import jqstatus_enum


@dataclass_json
@dataclass
class JobQueueDetail:
    compute_environment_order: List[computeenvironmentorder.ComputeEnvironmentOrder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeEnvironmentOrder' }})
    job_queue_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobQueueArn' }})
    job_queue_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobQueueName' }})
    priority: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    state: jqstate_enum.JqStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: Optional[jqstatus_enum.JqStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusReason' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
