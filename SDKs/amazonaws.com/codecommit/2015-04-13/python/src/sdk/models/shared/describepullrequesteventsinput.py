from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import pullrequesteventtype_enum


@dataclass_json
@dataclass
class DescribePullRequestEventsInput:
    actor_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actorArn' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    pull_request_event_type: Optional[pullrequesteventtype_enum.PullRequestEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestEventType' }})
    pull_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestId' }})
    
