from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import columnstatistics
from . import errordetail


@dataclass_json
@dataclass
class ColumnStatisticsError:
    column_statistics: Optional[columnstatistics.ColumnStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnStatistics' }})
    error: Optional[errordetail.ErrorDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    
