from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FieldStats:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    mean: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mean' }})
    min: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min' }})
    missing: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missing' }})
    stddev: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stddev' }})
    sum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    sum_of_squares: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sumOfSquares' }})
    
