from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteRequest:
    r"""DeleteRequest
    Represents a request to perform a <code>DeleteItem</code> operation on an item.
    """
    
    key: dict[str, AttributeValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    
