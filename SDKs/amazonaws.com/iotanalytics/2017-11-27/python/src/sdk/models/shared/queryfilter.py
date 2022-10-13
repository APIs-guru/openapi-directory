from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deltatime


@dataclass_json
@dataclass
class QueryFilter:
    delta_time: Optional[deltatime.DeltaTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deltaTime' }})
    
