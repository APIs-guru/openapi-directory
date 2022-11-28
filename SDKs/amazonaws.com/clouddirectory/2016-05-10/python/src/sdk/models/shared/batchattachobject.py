from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchAttachObject:
    r"""BatchAttachObject
    Represents the output of an <a>AttachObject</a> operation.
    """
    
    child_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChildReference') }})
    link_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinkName') }})
    parent_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentReference') }})
    
