from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DateColumnStatisticsData:
    r"""DateColumnStatisticsData
    Defines column statistics supported for timestamp data columns.
    """
    
    number_of_distinct_values: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfDistinctValues') }})
    number_of_nulls: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfNulls') }})
    maximum_value: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumValue'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    minimum_value: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumValue'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
