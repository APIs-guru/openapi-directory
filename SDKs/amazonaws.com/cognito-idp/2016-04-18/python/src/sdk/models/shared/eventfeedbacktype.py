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
class EventFeedbackType:
    r"""EventFeedbackType
    Specifies the event feedback type.
    """
    
    feedback_value: FeedbackValueTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackValue') }})
    provider: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Provider') }})
    feedback_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
