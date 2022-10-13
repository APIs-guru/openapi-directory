from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import columnstatistics


@dataclass_json
@dataclass
class UpdateColumnStatisticsForTableRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    column_statistics_list: List[columnstatistics.ColumnStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnStatisticsList' }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
