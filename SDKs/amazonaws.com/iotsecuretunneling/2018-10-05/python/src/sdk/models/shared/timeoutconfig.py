from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimeoutConfig:
    max_lifetime_timeout_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxLifetimeTimeoutMinutes' }})
    
