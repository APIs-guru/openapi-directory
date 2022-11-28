from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomRoutingDestinationConfiguration:
    r"""CustomRoutingDestinationConfiguration
    For a custom routing accelerator, sets the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
    """
    
    from_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromPort') }})
    protocols: List[CustomRoutingProtocolEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocols') }})
    to_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ToPort') }})
    
