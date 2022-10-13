from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HealthCheck:
    command: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retries' }})
    start_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startPeriod' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    
