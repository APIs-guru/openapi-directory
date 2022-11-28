from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutRequest:
    r"""PutRequest
    Represents a request to perform a <code>PutItem</code> operation on an item.
    """
    
    item: dict[str, AttributeValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    
