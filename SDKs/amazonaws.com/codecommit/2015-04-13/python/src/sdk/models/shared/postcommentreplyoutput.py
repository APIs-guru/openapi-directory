from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import comment


@dataclass_json
@dataclass
class PostCommentReplyOutput:
    comment: Optional[comment.Comment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    
