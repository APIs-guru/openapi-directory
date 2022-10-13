from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SsmControls:
    concurrent_execution_rate_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConcurrentExecutionRatePercentage' }})
    error_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorPercentage' }})
    
