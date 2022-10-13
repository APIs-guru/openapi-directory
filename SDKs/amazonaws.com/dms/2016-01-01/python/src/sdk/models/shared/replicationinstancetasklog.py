from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReplicationInstanceTaskLog:
    replication_instance_task_log_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceTaskLogSize' }})
    replication_task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskArn' }})
    replication_task_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskName' }})
    
