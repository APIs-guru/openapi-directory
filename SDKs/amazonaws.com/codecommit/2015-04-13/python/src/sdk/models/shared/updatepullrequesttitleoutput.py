from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import pullrequest


@dataclass_json
@dataclass
class UpdatePullRequestTitleOutput:
    pull_request: pullrequest.PullRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequest' }})
    
