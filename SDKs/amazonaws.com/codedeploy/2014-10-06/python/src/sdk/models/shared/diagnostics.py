from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Diagnostics:
    r"""Diagnostics
    Diagnostic information about executable scripts that are part of a deployment.
    """
    
    error_code: Optional[LifecycleErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    log_tail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logTail') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    script_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptName') }})
    
