from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import iotjobabortconfig
from . import iotjobexecutionsrolloutconfig
from . import iotjobtimeoutconfig


@dataclass_json
@dataclass
class DeploymentIoTJobConfiguration:
    abort_config: Optional[iotjobabortconfig.IoTJobAbortConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abortConfig' }})
    job_executions_rollout_config: Optional[iotjobexecutionsrolloutconfig.IoTJobExecutionsRolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobExecutionsRolloutConfig' }})
    timeout_config: Optional[iotjobtimeoutconfig.IoTJobTimeoutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutConfig' }})
    
