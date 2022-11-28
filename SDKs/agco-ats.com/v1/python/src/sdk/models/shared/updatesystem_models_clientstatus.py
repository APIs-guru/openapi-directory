from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateSystemModelsClientStatus:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientID') }})
    last_checkin: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastCheckin'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    minutes_elapsed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinutesElapsed') }})
    report_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportResult') }})
    report_result_is_valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportResultIsValid') }})
    report_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportValue') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tag') }})
    
