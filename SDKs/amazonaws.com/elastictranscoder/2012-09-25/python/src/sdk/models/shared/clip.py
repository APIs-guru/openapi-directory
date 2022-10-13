from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timespan


@dataclass_json
@dataclass
class Clip:
    time_span: Optional[timespan.TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeSpan' }})
    
