from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actiondeclaration
from . import blockerdeclaration


@dataclass_json
@dataclass
class StageDeclaration:
    actions: List[actiondeclaration.ActionDeclaration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    blockers: Optional[List[blockerdeclaration.BlockerDeclaration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockers' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
