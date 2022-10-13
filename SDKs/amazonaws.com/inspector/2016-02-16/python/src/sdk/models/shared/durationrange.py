from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DurationRange:
    max_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSeconds' }})
    min_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minSeconds' }})
    
