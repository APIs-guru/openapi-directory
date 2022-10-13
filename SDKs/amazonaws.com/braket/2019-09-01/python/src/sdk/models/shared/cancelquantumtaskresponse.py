from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import cancellationstatus_enum


@dataclass_json
@dataclass
class CancelQuantumTaskResponse:
    cancellation_status: cancellationstatus_enum.CancellationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellationStatus' }})
    quantum_task_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantumTaskArn' }})
    
