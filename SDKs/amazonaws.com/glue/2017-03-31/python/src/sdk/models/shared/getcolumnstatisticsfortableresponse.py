from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetColumnStatisticsForTableResponse:
    column_statistics_list: Optional[List[ColumnStatistics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnStatisticsList') }})
    errors: Optional[List[ColumnError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    
