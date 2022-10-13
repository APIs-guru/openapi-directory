from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import challengeresponsetype
from . import eventcontextdatatype
from . import eventfeedbacktype
from . import eventresponsetype_enum
from . import eventrisktype
from . import eventtype_enum


@dataclass_json
@dataclass
class AuthEventType:
    challenge_responses: Optional[List[challengeresponsetype.ChallengeResponseType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChallengeResponses' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_context_data: Optional[eventcontextdatatype.EventContextDataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventContextData' }})
    event_feedback: Optional[eventfeedbacktype.EventFeedbackType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventFeedback' }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventId' }})
    event_response: Optional[eventresponsetype_enum.EventResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventResponse' }})
    event_risk: Optional[eventrisktype.EventRiskType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventRisk' }})
    event_type: Optional[eventtype_enum.EventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventType' }})
    
