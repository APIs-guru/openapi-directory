from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RetryPolicy:
    maximum_event_age_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumEventAgeInSeconds' }})
    maximum_retry_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumRetryAttempts' }})
    
