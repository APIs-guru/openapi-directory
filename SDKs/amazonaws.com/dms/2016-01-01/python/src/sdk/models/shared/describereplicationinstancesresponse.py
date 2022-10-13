from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicationinstance


@dataclass_json
@dataclass
class DescribeReplicationInstancesResponse:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    replication_instances: Optional[List[replicationinstance.ReplicationInstance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstances' }})
    
