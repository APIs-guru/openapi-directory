from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRetainedMessagesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    retained_topics: Optional[List[RetainedMessageSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retainedTopics') }})
    
