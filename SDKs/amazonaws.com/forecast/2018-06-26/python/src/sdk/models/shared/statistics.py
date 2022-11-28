from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Statistics:
    r"""Statistics
    Provides statistics for each data field imported into to an Amazon Forecast dataset with the <a>CreateDatasetImportJob</a> operation.
    """
    
    avg: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Avg') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    count_distinct: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountDistinct') }})
    count_distinct_long: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountDistinctLong') }})
    count_long: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountLong') }})
    count_nan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountNan') }})
    count_nan_long: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountNanLong') }})
    count_null: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountNull') }})
    count_null_long: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountNullLong') }})
    max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Max') }})
    min: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Min') }})
    stddev: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Stddev') }})
    
