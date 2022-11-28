from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrpcTimeout:
    r"""GrpcTimeout
    An object that represents types of timeouts. 
    """
    
    idle: Optional[Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idle') }})
    per_request: Optional[Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perRequest') }})
    
