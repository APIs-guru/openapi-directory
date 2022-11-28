from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JobTimeout:
    r"""JobTimeout
    An object representing a job timeout configuration.
    """
    
    attempt_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attemptDurationSeconds') }})
    
