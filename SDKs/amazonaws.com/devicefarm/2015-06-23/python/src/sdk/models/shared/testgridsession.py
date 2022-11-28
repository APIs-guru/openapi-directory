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
class TestGridSession:
    r"""TestGridSession
    A <a>TestGridSession</a> is a single instance of a browser launched from the URL provided by a call to <a>CreateTestGridUrl</a>.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    billing_minutes: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingMinutes') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ended: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ended'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    selenium_properties: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seleniumProperties') }})
    status: Optional[TestGridSessionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
