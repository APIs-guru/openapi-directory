from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdatePullRequestTitleInput:
    pull_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestId' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
