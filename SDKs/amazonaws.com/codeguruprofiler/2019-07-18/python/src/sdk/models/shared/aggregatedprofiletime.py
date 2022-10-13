from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import aggregationperiod_enum


@dataclass_json
@dataclass
class AggregatedProfileTime:
    period: Optional[aggregationperiod_enum.AggregationPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
