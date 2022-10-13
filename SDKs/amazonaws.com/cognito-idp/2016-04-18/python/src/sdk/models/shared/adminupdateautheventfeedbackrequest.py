from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import feedbackvaluetype_enum


@dataclass_json
@dataclass
class AdminUpdateAuthEventFeedbackRequest:
    event_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventId' }})
    feedback_value: feedbackvaluetype_enum.FeedbackValueTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeedbackValue' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
