from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import commentsforpullrequest


@dataclass_json
@dataclass
class GetCommentsForPullRequestOutput:
    comments_for_pull_request_data: Optional[List[commentsforpullrequest.CommentsForPullRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentsForPullRequestData' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
