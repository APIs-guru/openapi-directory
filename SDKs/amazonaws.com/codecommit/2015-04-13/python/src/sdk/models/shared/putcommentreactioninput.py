from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutCommentReactionInput:
    comment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentId') }})
    reaction_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reactionValue') }})
    
