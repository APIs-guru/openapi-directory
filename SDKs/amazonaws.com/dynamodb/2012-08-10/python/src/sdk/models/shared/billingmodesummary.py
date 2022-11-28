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
class BillingModeSummary:
    r"""BillingModeSummary
    Contains the details for the read/write capacity mode.
    """
    
    billing_mode: Optional[BillingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingMode') }})
    last_update_to_pay_per_request_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateToPayPerRequestDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
