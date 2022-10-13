from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import columnstatistics
from . import columnerror


@dataclass_json
@dataclass
class GetColumnStatisticsForTableResponse:
    column_statistics_list: Optional[List[columnstatistics.ColumnStatistics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnStatisticsList' }})
    errors: Optional[List[columnerror.ColumnError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    
