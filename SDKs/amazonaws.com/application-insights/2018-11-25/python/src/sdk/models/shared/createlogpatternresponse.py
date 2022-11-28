from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateLogPatternResponse:
    log_pattern: Optional[LogPattern] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogPattern') }})
    resource_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceGroupName') }})
    
