from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventTimeRange:
    r"""EventTimeRange
     The time range during which an AWS event occurred. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions. 
    """
    
    from_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    to_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ToTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
