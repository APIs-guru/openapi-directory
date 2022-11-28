from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchAttachPolicy:
    r"""BatchAttachPolicy
    Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    object_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    policy_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyReference') }})
    
