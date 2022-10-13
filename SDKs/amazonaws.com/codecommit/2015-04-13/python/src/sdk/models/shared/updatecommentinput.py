from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateCommentInput:
    comment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentId' }})
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    
