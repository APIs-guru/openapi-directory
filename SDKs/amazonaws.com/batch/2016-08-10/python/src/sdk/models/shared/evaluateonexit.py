from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EvaluateOnExit:
    r"""EvaluateOnExit
    Specifies a set of conditions to be met, and an action to take (<code>RETRY</code> or <code>EXIT</code>) if all conditions are met.
    """
    
    action: RetryActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    on_exit_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onExitCode') }})
    on_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onReason') }})
    on_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onStatusReason') }})
    
