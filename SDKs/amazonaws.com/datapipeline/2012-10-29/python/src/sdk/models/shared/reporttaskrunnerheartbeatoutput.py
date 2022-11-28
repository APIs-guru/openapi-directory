from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReportTaskRunnerHeartbeatOutput:
    r"""ReportTaskRunnerHeartbeatOutput
    Contains the output of ReportTaskRunnerHeartbeat.
    """
    
    terminate: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminate') }})
    
