from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActionExecutionResult:
    external_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalExecutionId' }})
    external_execution_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalExecutionSummary' }})
    external_execution_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalExecutionUrl' }})
    
