from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TCPRoute:
    r"""TCPRoute
    An object that represents a TCP route type.
    """
    
    action: TCPRouteAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    timeout: Optional[TCPTimeout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
