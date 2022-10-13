from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import feedbacktype_enum


@dataclass_json
@dataclass
class UserFeedback:
    type: feedbacktype_enum.FeedbackTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
