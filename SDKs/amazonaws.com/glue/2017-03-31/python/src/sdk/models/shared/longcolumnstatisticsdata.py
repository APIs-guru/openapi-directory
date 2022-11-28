from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LongColumnStatisticsData:
    r"""LongColumnStatisticsData
    Defines column statistics supported for integer data columns.
    """
    
    number_of_distinct_values: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfDistinctValues') }})
    number_of_nulls: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfNulls') }})
    maximum_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumValue') }})
    minimum_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumValue') }})
    
