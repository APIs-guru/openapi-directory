from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualServiceProvider:
    r"""VirtualServiceProvider
    An object that represents the provider for a virtual service.
    """
    
    virtual_node: Optional[VirtualNodeServiceProvider] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualNode') }})
    virtual_router: Optional[VirtualRouterServiceProvider] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualRouter') }})
    
