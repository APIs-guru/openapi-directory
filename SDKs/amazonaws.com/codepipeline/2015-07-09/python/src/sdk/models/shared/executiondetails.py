from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExecutionDetails:
    external_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalExecutionId' }})
    percent_complete: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentComplete' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
