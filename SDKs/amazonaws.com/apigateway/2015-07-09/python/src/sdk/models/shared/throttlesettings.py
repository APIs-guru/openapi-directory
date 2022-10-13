from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ThrottleSettings:
    burst_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'burstLimit' }})
    rate_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateLimit' }})
    
