from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BooleanColumnStatisticsData:
    r"""BooleanColumnStatisticsData
    Defines column statistics supported for Boolean data columns.
    """
    
    number_of_falses: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfFalses') }})
    number_of_nulls: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfNulls') }})
    number_of_trues: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfTrues') }})
    
