from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import binarycolumnstatisticsdata
from . import booleancolumnstatisticsdata
from . import datecolumnstatisticsdata
from . import decimalcolumnstatisticsdata
from . import doublecolumnstatisticsdata
from . import longcolumnstatisticsdata
from . import stringcolumnstatisticsdata
from . import columnstatisticstype_enum


@dataclass_json
@dataclass
class ColumnStatisticsData:
    binary_column_statistics_data: Optional[binarycolumnstatisticsdata.BinaryColumnStatisticsData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BinaryColumnStatisticsData' }})
    boolean_column_statistics_data: Optional[booleancolumnstatisticsdata.BooleanColumnStatisticsData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BooleanColumnStatisticsData' }})
    date_column_statistics_data: Optional[datecolumnstatisticsdata.DateColumnStatisticsData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateColumnStatisticsData' }})
    decimal_column_statistics_data: Optional[decimalcolumnstatisticsdata.DecimalColumnStatisticsData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DecimalColumnStatisticsData' }})
    double_column_statistics_data: Optional[doublecolumnstatisticsdata.DoubleColumnStatisticsData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DoubleColumnStatisticsData' }})
    long_column_statistics_data: Optional[longcolumnstatisticsdata.LongColumnStatisticsData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LongColumnStatisticsData' }})
    string_column_statistics_data: Optional[stringcolumnstatisticsdata.StringColumnStatisticsData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StringColumnStatisticsData' }})
    type: columnstatisticstype_enum.ColumnStatisticsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
