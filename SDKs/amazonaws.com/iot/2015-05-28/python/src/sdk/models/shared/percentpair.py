from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PercentPair:
    percent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percent' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
