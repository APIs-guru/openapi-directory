from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualGatewayPortMapping:
    r"""VirtualGatewayPortMapping
    An object that represents a port mapping.
    """
    
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: VirtualGatewayPortProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    
