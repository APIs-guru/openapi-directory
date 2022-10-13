from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actiontype
from . import tag


@dataclass_json
@dataclass
class CreateCustomActionTypeOutput:
    action_type: actiontype.ActionType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionType' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
