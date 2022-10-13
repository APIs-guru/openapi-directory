from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Statistics:
    average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'average' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    maximum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximum' }})
    minimum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimum' }})
    std_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stdDeviation' }})
    sum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    sum_of_squares: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sumOfSquares' }})
    variance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variance' }})
    
