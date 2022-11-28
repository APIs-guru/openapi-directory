from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PostCommentForPullRequestInput:
    after_commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('afterCommitId') }})
    before_commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beforeCommitId') }})
    content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    pull_request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestId') }})
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
