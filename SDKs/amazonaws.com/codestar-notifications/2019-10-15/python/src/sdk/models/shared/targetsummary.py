from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TargetSummary:
    r"""TargetSummary
    Information about the targets specified for a notification rule.
    """
    
    target_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetAddress') }})
    target_status: Optional[TargetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetStatus') }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetType') }})
    
