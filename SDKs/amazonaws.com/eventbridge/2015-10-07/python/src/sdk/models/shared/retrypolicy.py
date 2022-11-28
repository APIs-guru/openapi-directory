from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetryPolicy:
    r"""RetryPolicy
    A <code>RetryPolicy</code> object that includes information about the retry policy settings.
    """
    
    maximum_event_age_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumEventAgeInSeconds') }})
    maximum_retry_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumRetryAttempts') }})
    
