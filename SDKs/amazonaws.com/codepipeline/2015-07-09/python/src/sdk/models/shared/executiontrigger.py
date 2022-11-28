from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecutionTrigger:
    r"""ExecutionTrigger
    The interaction or event that started a pipeline execution.
    """
    
    trigger_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerDetail') }})
    trigger_type: Optional[TriggerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerType') }})
    
