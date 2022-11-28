from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchListObjectParents:
    r"""BatchListObjectParents
    Lists parent objects that are associated with a given object in pagination fashion.
    """
    
    object_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
