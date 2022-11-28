from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualRouterListener:
    r"""VirtualRouterListener
    An object that represents a virtual router listener.
    """
    
    port_mapping: PortMapping = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portMapping') }})
    
