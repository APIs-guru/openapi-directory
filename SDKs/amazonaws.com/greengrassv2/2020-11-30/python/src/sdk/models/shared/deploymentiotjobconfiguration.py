from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeploymentIoTJobConfiguration:
    r"""DeploymentIoTJobConfiguration
    Contains information about an IoT job configuration.
    """
    
    abort_config: Optional[IoTJobAbortConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abortConfig') }})
    job_executions_rollout_config: Optional[IoTJobExecutionsRolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobExecutionsRolloutConfig') }})
    timeout_config: Optional[IoTJobTimeoutConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutConfig') }})
    
