from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualGatewayLogging:
    r"""VirtualGatewayLogging
    An object that represents logging information.
    """
    
    access_log: Optional[VirtualGatewayAccessLog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLog') }})
    
