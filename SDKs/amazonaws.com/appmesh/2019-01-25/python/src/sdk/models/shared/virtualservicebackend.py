from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualServiceBackend:
    r"""VirtualServiceBackend
    An object that represents a virtual service backend for a virtual node.
    """
    
    virtual_service_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualServiceName') }})
    client_policy: Optional[ClientPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientPolicy') }})
    
