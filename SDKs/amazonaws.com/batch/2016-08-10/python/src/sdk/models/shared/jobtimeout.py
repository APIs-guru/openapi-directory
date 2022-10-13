from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JobTimeout:
    attempt_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attemptDurationSeconds' }})
    
