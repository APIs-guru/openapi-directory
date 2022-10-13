from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deleterequest
from . import putrequest


@dataclass_json
@dataclass
class WriteRequest:
    delete_request: Optional[deleterequest.DeleteRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteRequest' }})
    put_request: Optional[putrequest.PutRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PutRequest' }})
    
