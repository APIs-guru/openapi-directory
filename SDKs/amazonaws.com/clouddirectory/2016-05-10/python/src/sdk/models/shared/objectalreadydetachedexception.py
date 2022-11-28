from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObjectAlreadyDetachedException:
    r"""ObjectAlreadyDetachedException
    Indicates that the object is not attached to the index.
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
