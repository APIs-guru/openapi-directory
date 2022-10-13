from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DateColumnStatisticsData:
    maximum_value: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumValue', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    minimum_value: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumValue', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_of_distinct_values: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfDistinctValues' }})
    number_of_nulls: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfNulls' }})
    
