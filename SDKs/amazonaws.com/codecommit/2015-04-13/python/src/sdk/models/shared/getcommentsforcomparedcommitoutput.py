from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetCommentsForComparedCommitOutput:
    comments_for_compared_commit_data: Optional[List[CommentsForComparedCommit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentsForComparedCommitData') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
