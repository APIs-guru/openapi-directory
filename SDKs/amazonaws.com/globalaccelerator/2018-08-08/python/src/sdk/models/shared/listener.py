from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Listener:
    r"""Listener
    A complex type for a listener.
    """
    
    client_affinity: Optional[ClientAffinityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientAffinity') }})
    listener_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListenerArn') }})
    port_ranges: Optional[List[PortRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortRanges') }})
    protocol: Optional[ProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    
