from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import billingmode_enum


@dataclass_json
@dataclass
class BillingModeSummary:
    billing_mode: Optional[billingmode_enum.BillingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingMode' }})
    last_update_to_pay_per_request_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateToPayPerRequestDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
