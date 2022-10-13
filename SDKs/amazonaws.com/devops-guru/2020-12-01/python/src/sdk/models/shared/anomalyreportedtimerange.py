from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AnomalyReportedTimeRange:
    close_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloseTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    open_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpenTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
