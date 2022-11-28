from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Step:
    r"""Step
    This represents a step in a cluster.
    """
    
    action_on_failure: Optional[ActionOnFailureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionOnFailure') }})
    config: Optional[HadoopStepConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Config') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    status: Optional[StepStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
