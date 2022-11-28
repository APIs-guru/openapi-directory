from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Problem:
    r"""Problem
    Represents a specific warning or failure.
    """
    
    device: Optional[Device] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    job: Optional[ProblemDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    result: Optional[ExecutionResultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    run: Optional[ProblemDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run') }})
    suite: Optional[ProblemDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suite') }})
    test: Optional[ProblemDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    
