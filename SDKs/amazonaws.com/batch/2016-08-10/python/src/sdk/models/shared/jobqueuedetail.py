from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobQueueDetail:
    r"""JobQueueDetail
    An object representing the details of an Batch job queue.
    """
    
    compute_environment_order: List[ComputeEnvironmentOrder] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEnvironmentOrder') }})
    job_queue_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobQueueArn') }})
    job_queue_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobQueueName') }})
    priority: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    state: JqStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status: Optional[JqStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReason') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
