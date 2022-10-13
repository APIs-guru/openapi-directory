from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import pointintimerecoverystatus_enum


@dataclass_json
@dataclass
class PointInTimeRecoveryDescription:
    earliest_restorable_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EarliestRestorableDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_restorable_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestRestorableDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    point_in_time_recovery_status: Optional[pointintimerecoverystatus_enum.PointInTimeRecoveryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PointInTimeRecoveryStatus' }})
    
