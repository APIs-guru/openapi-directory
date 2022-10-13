from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Aggregates:
    average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'average' }})
    count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    maximum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximum' }})
    minimum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimum' }})
    standard_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standardDeviation' }})
    sum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    
