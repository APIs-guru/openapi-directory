from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListenerTimeout:
    r"""ListenerTimeout
    An object that represents timeouts for different protocols.
    """
    
    grpc: Optional[GrpcTimeout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpc') }})
    http: Optional[HTTPTimeout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    http2: Optional[HTTPTimeout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http2') }})
    tcp: Optional[TCPTimeout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcp') }})
    
