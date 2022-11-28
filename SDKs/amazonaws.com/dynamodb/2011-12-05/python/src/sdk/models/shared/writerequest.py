from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WriteRequest:
    r"""WriteRequest
    This structure is a Union of PutRequest and DeleteRequest. It can contain exactly one of <code>PutRequest</code> or <code>DeleteRequest</code>. Never Both. This is enforced in the code.
    """
    
    delete_request: Optional[DeleteRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteRequest') }})
    put_request: Optional[PutRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PutRequest') }})
    
