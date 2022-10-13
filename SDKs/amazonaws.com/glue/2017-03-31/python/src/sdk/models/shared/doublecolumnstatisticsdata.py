from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DoubleColumnStatisticsData:
    maximum_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumValue' }})
    minimum_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumValue' }})
    number_of_distinct_values: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfDistinctValues' }})
    number_of_nulls: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfNulls' }})
    
