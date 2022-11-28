from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionState:
    r"""ActionState
    Represents information about the state of an action.
    """
    
    action_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionName') }})
    current_revision: Optional[ActionRevision] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentRevision') }})
    entity_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityUrl') }})
    latest_execution: Optional[ActionExecution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestExecution') }})
    revision_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionUrl') }})
    
