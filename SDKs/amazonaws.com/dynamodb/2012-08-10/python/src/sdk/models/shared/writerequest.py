from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WriteRequest:
    r"""WriteRequest
    Represents an operation to perform - either <code>DeleteItem</code> or <code>PutItem</code>. You can only request one of these operations, not both, in a single <code>WriteRequest</code>. If you do need to perform both of these operations, you need to provide two separate <code>WriteRequest</code> objects.
    """
    
    delete_request: Optional[DeleteRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteRequest') }})
    put_request: Optional[PutRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PutRequest') }})
    
