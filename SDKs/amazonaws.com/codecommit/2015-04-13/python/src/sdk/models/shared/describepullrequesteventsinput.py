from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribePullRequestEventsInput:
    pull_request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestId') }})
    actor_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actorArn') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    pull_request_event_type: Optional[PullRequestEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestEventType') }})
    
