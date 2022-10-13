from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BinaryColumnStatisticsData:
    average_length: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AverageLength' }})
    maximum_length: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumLength' }})
    number_of_nulls: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfNulls' }})
    
