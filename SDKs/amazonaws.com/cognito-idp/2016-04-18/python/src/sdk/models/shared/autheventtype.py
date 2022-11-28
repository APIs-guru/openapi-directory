from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuthEventType:
    r"""AuthEventType
    The authentication event type.
    """
    
    challenge_responses: Optional[List[ChallengeResponseType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChallengeResponses') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_context_data: Optional[EventContextDataType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventContextData') }})
    event_feedback: Optional[EventFeedbackType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventFeedback') }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventId') }})
    event_response: Optional[EventResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventResponse') }})
    event_risk: Optional[EventRiskType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventRisk') }})
    event_type: Optional[EventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventType') }})
    
