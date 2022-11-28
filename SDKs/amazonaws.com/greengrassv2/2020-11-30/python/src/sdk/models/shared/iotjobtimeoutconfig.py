from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IoTJobTimeoutConfig:
    r"""IoTJobTimeoutConfig
    Contains information about the timeout configuration for a job.
    """
    
    in_progress_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inProgressTimeoutInMinutes') }})
    
