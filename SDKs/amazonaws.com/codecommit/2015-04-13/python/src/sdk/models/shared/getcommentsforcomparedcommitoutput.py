from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import commentsforcomparedcommit


@dataclass_json
@dataclass
class GetCommentsForComparedCommitOutput:
    comments_for_compared_commit_data: Optional[List[commentsforcomparedcommit.CommentsForComparedCommit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentsForComparedCommitData' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
