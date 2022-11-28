from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OnExitLifecycle:
    r"""OnExitLifecycle
    When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>.
    """
    
    events: Optional[List[Event]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    
