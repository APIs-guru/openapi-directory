from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import location


@dataclass_json
@dataclass
class PostCommentForPullRequestInput:
    after_commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'afterCommitId' }})
    before_commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beforeCommitId' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    pull_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestId' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
