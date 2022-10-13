from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Endpoint:
    address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    cache_period_in_minutes: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CachePeriodInMinutes' }})
    
