from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateColumnStatisticsForPartitionRequest:
    column_statistics_list: List[ColumnStatistics] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnStatisticsList') }})
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    partition_values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionValues') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
