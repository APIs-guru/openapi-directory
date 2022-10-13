from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import decimalnumber
from . import decimalnumber


@dataclass_json
@dataclass
class DecimalColumnStatisticsData:
    maximum_value: Optional[decimalnumber.DecimalNumber] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumValue' }})
    minimum_value: Optional[decimalnumber.DecimalNumber] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumValue' }})
    number_of_distinct_values: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfDistinctValues' }})
    number_of_nulls: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfNulls' }})
    
