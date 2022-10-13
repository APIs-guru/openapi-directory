from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import retainedmessagesummary


@dataclass_json
@dataclass
class ListRetainedMessagesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    retained_topics: Optional[List[retainedmessagesummary.RetainedMessageSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retainedTopics' }})
    
