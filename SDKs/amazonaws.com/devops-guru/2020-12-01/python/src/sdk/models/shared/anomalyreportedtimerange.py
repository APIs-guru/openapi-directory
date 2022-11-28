from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AnomalyReportedTimeRange:
    r"""AnomalyReportedTimeRange
     A time range that specifies when DevOps Guru opens and then closes an anomaly. This is different from <code>AnomalyTimeRange</code>, which specifies the time range when DevOps Guru actually observes the anomalous behavior. 
    """
    
    open_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    close_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloseTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
