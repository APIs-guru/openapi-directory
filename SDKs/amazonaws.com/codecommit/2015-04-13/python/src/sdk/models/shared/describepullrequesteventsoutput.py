from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pullrequestevent


@dataclass_json
@dataclass
class DescribePullRequestEventsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    pull_request_events: List[pullrequestevent.PullRequestEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestEvents' }})
    
