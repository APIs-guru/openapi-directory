from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BooleanColumnStatisticsData:
    number_of_falses: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfFalses' }})
    number_of_nulls: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfNulls' }})
    number_of_trues: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfTrues' }})
    
