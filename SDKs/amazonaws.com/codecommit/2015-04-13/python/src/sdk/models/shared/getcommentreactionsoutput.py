from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reactionforcomment


@dataclass_json
@dataclass
class GetCommentReactionsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    reactions_for_comment: List[reactionforcomment.ReactionForComment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reactionsForComment' }})
    
