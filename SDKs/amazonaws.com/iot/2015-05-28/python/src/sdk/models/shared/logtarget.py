from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LogTarget:
    r"""LogTarget
    A log target.
    """
    
    target_type: LogTargetTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetType') }})
    target_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetName') }})
    
