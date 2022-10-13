from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reactionvalueformats


@dataclass_json
@dataclass
class ReactionForComment:
    reaction: Optional[reactionvalueformats.ReactionValueFormats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reaction' }})
    reaction_users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reactionUsers' }})
    reactions_from_deleted_users_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reactionsFromDeletedUsersCount' }})
    
