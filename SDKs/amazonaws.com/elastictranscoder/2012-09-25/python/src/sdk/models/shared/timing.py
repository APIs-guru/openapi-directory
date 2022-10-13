from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Timing:
    finish_time_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinishTimeMillis' }})
    start_time_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTimeMillis' }})
    submit_time_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubmitTimeMillis' }})
    
