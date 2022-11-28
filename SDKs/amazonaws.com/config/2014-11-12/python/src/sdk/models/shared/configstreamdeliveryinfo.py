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
class ConfigStreamDeliveryInfo:
    r"""ConfigStreamDeliveryInfo
    A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic.
    """
    
    last_error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastErrorCode') }})
    last_error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastErrorMessage') }})
    last_status: Optional[DeliveryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastStatus') }})
    last_status_change_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastStatusChangeTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
