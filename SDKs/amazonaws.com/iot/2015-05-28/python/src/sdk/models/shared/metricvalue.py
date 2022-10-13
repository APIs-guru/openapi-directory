from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetricValue:
    cidrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidrs' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    number: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    numbers: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numbers' }})
    ports: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ports' }})
    strings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strings' }})
    
