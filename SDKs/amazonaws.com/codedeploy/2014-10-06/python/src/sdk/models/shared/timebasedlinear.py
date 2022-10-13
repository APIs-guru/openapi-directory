from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimeBasedLinear:
    linear_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linearInterval' }})
    linear_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linearPercentage' }})
    
