from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReportTaskRunnerHeartbeatInput:
    r"""ReportTaskRunnerHeartbeatInput
    Contains the parameters for ReportTaskRunnerHeartbeat.
    """
    
    taskrunner_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskrunnerId') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    worker_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerGroup') }})
    
