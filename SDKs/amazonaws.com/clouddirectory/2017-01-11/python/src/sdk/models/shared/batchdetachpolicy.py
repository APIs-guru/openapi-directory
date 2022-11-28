from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchDetachPolicy:
    r"""BatchDetachPolicy
    Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>.
    """
    
    object_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    policy_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyReference') }})
    
