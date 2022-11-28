from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchDetachObject:
    r"""BatchDetachObject
    Represents the output of a <a>DetachObject</a> operation.
    """
    
    link_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinkName') }})
    parent_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentReference') }})
    batch_reference_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchReferenceName') }})
    
