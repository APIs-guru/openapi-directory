from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ErrorInfo:
    execution_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionMessage' }})
    put_failures_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'putFailuresCount' }})
    
