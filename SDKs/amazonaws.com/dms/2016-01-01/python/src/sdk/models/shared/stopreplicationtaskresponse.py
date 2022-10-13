from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import replicationtask


@dataclass_json
@dataclass
class StopReplicationTaskResponse:
    replication_task: Optional[replicationtask.ReplicationTask] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTask' }})
    
