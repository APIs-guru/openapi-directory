from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import issuedetected
from . import sentimentvalue_enum


@dataclass_json
@dataclass
class Transcript:
    begin_offset_millis: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BeginOffsetMillis' }})
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    end_offset_millis: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndOffsetMillis' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    issues_detected: Optional[List[issuedetected.IssueDetected]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IssuesDetected' }})
    participant_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParticipantId' }})
    participant_role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParticipantRole' }})
    sentiment: sentimentvalue_enum.SentimentValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sentiment' }})
    
