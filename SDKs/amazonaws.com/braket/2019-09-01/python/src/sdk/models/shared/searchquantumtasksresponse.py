from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import quantumtasksummary


@dataclass_json
@dataclass
class SearchQuantumTasksResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    quantum_tasks: List[quantumtasksummary.QuantumTaskSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantumTasks' }})
    
