from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuthInfo:
    r"""AuthInfo
    A collection of authorization information.
    """
    
    resources: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    action_type: Optional[ActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionType') }})
    
