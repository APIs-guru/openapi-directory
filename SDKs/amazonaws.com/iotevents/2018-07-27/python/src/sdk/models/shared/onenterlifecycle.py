from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OnEnterLifecycle:
    r"""OnEnterLifecycle
    When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE.
    """
    
    events: Optional[List[Event]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    
