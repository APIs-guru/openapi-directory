from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import feedbackvaluetype_enum


@dataclass_json
@dataclass
class EventFeedbackType:
    feedback_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeedbackDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    feedback_value: feedbackvaluetype_enum.FeedbackValueTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeedbackValue' }})
    provider: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Provider' }})
    
