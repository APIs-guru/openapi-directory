from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Transcript:
    r"""Transcript
    A list of messages in the session.
    """
    
    begin_offset_millis: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BeginOffsetMillis') }})
    content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    end_offset_millis: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndOffsetMillis') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    participant_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParticipantId') }})
    participant_role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParticipantRole') }})
    sentiment: SentimentValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sentiment') }})
    issues_detected: Optional[List[IssueDetected]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IssuesDetected') }})
    
