from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchDetachFromIndex:
    r"""BatchDetachFromIndex
    Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    index_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexReference') }})
    target_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetReference') }})
    
