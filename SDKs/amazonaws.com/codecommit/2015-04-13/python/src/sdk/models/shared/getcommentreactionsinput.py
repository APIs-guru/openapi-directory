from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetCommentReactionsInput:
    comment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    reaction_user_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reactionUserArn' }})
    
