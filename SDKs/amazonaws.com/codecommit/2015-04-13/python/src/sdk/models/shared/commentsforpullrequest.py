from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommentsForPullRequest:
    r"""CommentsForPullRequest
    Returns information about comments on a pull request.
    """
    
    after_blob_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('afterBlobId') }})
    after_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('afterCommitId') }})
    before_blob_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beforeBlobId') }})
    before_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beforeCommitId') }})
    comments: Optional[List[Comment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    pull_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestId') }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    
