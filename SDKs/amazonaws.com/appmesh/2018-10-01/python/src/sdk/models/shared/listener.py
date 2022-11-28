from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Listener:
    r"""Listener
    An object representing a listener for a virtual node.
    """
    
    health_check: Optional[HealthCheckPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheck') }})
    port_mapping: Optional[PortMapping] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portMapping') }})
    
