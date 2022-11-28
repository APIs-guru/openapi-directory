from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApprovalResult:
    r"""ApprovalResult
    Represents information about the result of an approval request.
    """
    
    status: ApprovalStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    summary: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
