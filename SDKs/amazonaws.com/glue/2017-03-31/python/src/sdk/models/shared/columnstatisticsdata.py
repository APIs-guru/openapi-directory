from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ColumnStatisticsData:
    r"""ColumnStatisticsData
    Contains the individual types of column statistics data. Only one data object should be set and indicated by the <code>Type</code> attribute.
    """
    
    type: ColumnStatisticsTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    binary_column_statistics_data: Optional[BinaryColumnStatisticsData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BinaryColumnStatisticsData') }})
    boolean_column_statistics_data: Optional[BooleanColumnStatisticsData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BooleanColumnStatisticsData') }})
    date_column_statistics_data: Optional[DateColumnStatisticsData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateColumnStatisticsData') }})
    decimal_column_statistics_data: Optional[DecimalColumnStatisticsData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DecimalColumnStatisticsData') }})
    double_column_statistics_data: Optional[DoubleColumnStatisticsData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DoubleColumnStatisticsData') }})
    long_column_statistics_data: Optional[LongColumnStatisticsData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongColumnStatisticsData') }})
    string_column_statistics_data: Optional[StringColumnStatisticsData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringColumnStatisticsData') }})
    
