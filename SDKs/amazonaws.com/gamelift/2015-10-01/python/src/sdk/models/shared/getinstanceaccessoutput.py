from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetInstanceAccessOutput:
    r"""GetInstanceAccessOutput
    Represents the returned data in response to a request operation.
    """
    
    instance_access: Optional[InstanceAccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceAccess') }})
    
