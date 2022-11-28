from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StringColumnStatisticsData:
    r"""StringColumnStatisticsData
    Defines column statistics supported for character sequence data values.
    """
    
    average_length: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AverageLength') }})
    maximum_length: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumLength') }})
    number_of_distinct_values: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfDistinctValues') }})
    number_of_nulls: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfNulls') }})
    
