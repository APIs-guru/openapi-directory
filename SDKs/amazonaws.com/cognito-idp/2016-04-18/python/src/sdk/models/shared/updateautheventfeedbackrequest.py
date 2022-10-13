from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import feedbackvaluetype_enum


@dataclass_json
@dataclass
class UpdateAuthEventFeedbackRequest:
    event_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventId' }})
    feedback_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeedbackToken' }})
    feedback_value: feedbackvaluetype_enum.FeedbackValueTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeedbackValue' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
