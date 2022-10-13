from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import throttlesettings


@dataclass_json
@dataclass
class APIStage:
    api_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiId' }})
    stage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stage' }})
    throttle: Optional[dict[str, throttlesettings.ThrottleSettings]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'throttle' }})
    
