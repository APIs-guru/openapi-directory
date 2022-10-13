from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostCommentReplyInput:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    in_reply_to: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inReplyTo' }})
    
