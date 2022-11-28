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
class PointInTimeRecoveryDescription:
    r"""PointInTimeRecoveryDescription
    The description of the point in time settings applied to the table.
    """
    
    earliest_restorable_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarliestRestorableDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_restorable_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestRestorableDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    point_in_time_recovery_status: Optional[PointInTimeRecoveryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PointInTimeRecoveryStatus') }})
    
