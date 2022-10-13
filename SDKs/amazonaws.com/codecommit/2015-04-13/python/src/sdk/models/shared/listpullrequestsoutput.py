from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListPullRequestsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    pull_request_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestIds' }})
    
