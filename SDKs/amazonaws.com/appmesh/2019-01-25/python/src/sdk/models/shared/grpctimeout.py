from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import duration
from . import duration


@dataclass_json
@dataclass
class GrpcTimeout:
    idle: Optional[duration.Duration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idle' }})
    per_request: Optional[duration.Duration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perRequest' }})
    
