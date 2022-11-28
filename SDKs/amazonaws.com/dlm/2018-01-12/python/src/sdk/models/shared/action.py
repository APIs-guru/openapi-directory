from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Action:
    r"""Action
    Specifies an action for an event-based policy.
    """
    
    cross_region_copy: List[CrossRegionCopyAction] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrossRegionCopy') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
