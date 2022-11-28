from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdminUpdateAuthEventFeedbackRequest:
    event_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventId') }})
    feedback_value: FeedbackValueTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackValue') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
