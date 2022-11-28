from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomRoutingDestinationDescription:
    r"""CustomRoutingDestinationDescription
    For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
    """
    
    from_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromPort') }})
    protocols: Optional[List[ProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocols') }})
    to_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ToPort') }})
    
