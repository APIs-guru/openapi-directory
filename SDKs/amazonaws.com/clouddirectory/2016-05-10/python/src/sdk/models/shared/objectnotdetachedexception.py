from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObjectNotDetachedException:
    r"""ObjectNotDetachedException
    Indicates that the requested operation cannot be completed because the object has not been detached from the tree.
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
