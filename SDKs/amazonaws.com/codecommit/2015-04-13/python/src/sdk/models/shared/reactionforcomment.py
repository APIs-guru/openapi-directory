from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReactionForComment:
    r"""ReactionForComment
    Information about the reaction values provided by users on a comment.
    """
    
    reaction: Optional[ReactionValueFormats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reaction') }})
    reaction_users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reactionUsers') }})
    reactions_from_deleted_users_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reactionsFromDeletedUsersCount') }})
    
