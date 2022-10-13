from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProvisionedThroughputDescription:
    last_decrease_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastDecreaseDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_increase_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastIncreaseDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_of_decreases_today: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfDecreasesToday' }})
    read_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadCapacityUnits' }})
    write_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WriteCapacityUnits' }})
    
