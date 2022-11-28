from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NotNodeException:
    r"""NotNodeException
    Occurs when any invalid operations are performed on an object that is not a node, such as calling <code>ListObjectChildren</code> for a leaf node object.
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
