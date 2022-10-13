from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicationinstancetasklog


@dataclass_json
@dataclass
class DescribeReplicationInstanceTaskLogsResponse:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    replication_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceArn' }})
    replication_instance_task_logs: Optional[List[replicationinstancetasklog.ReplicationInstanceTaskLog]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceTaskLogs' }})
    
