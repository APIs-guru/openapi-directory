from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateSystemModelsClientStatus:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientID' }})
    last_checkin: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastCheckin', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    minutes_elapsed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinutesElapsed' }})
    report_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportResult' }})
    report_result_is_valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportResultIsValid' }})
    report_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportValue' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tag' }})
    
