from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReportTaskRunnerHeartbeatInput:
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    taskrunner_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskrunnerId' }})
    worker_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerGroup' }})
    
