from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimeBasedCanary:
    canary_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canaryInterval' }})
    canary_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canaryPercentage' }})
    
