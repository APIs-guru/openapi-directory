from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ColumnStatistics:
    r"""ColumnStatistics
    Represents the generated column-level statistics for a table or partition.
    """
    
    analyzed_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyzedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    column_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnName') }})
    column_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnType') }})
    statistics_data: ColumnStatisticsData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatisticsData') }})
    
