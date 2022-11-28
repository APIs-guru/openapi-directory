from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateMatchmakingRuleSetInput:
    r"""CreateMatchmakingRuleSetInput
    Represents the input for a request operation.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rule_set_body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleSetBody') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
