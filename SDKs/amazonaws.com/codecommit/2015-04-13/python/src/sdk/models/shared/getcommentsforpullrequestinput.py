from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetCommentsForPullRequestInput:
    after_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'afterCommitId' }})
    before_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beforeCommitId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    pull_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestId' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
