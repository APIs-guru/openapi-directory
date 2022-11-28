from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ColumnStatisticsError:
    r"""ColumnStatisticsError
    Encapsulates a <code>ColumnStatistics</code> object that failed and the reason for failure.
    """
    
    column_statistics: Optional[ColumnStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnStatistics') }})
    error: Optional[ErrorDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    
