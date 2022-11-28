from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StageDeclaration:
    r"""StageDeclaration
    Represents information about a stage and its definition.
    """
    
    actions: List[ActionDeclaration] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    blockers: Optional[List[BlockerDeclaration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockers') }})
    
