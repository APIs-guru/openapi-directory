from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FailureDetails:
    r"""FailureDetails
    The details of the step failure. The service attempts to detect the root cause for many common failures.
    """
    
    log_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogFile') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reason') }})
    
