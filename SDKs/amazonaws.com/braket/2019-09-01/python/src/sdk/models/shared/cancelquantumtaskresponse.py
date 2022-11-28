from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CancelQuantumTaskResponse:
    cancellation_status: CancellationStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellationStatus') }})
    quantum_task_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantumTaskArn') }})
    
