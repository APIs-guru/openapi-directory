from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from . import columnstatisticsdata


@dataclass_json
@dataclass
class ColumnStatistics:
    analyzed_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnalyzedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    column_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnName' }})
    column_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnType' }})
    statistics_data: columnstatisticsdata.ColumnStatisticsData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatisticsData' }})
    
