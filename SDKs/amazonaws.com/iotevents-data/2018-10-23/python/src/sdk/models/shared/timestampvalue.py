from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimestampValue:
    time_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeInMillis' }})
    
