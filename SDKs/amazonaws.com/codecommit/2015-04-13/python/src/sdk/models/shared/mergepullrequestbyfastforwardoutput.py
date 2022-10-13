from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pullrequest


@dataclass_json
@dataclass
class MergePullRequestByFastForwardOutput:
    pull_request: Optional[pullrequest.PullRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequest' }})
    
