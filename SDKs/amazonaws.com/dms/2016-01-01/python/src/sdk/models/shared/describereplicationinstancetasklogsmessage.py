from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeReplicationInstanceTaskLogsMessage:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    max_records: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxRecords' }})
    replication_instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceArn' }})
    
