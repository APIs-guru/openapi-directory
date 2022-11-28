from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualNodeSpec:
    r"""VirtualNodeSpec
    An object representing the specification of a virtual node.
    """
    
    backends: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backends') }})
    listeners: Optional[List[Listener]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listeners') }})
    service_discovery: Optional[ServiceDiscovery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDiscovery') }})
    
