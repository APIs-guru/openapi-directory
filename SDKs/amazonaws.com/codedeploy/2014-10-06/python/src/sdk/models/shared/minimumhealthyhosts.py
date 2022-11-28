from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MinimumHealthyHosts:
    r"""MinimumHealthyHosts
    Information about minimum healthy instance.
    """
    
    type: Optional[MinimumHealthyHostsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
