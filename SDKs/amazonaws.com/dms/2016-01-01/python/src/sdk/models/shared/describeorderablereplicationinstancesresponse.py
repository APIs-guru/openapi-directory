from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderablereplicationinstance


@dataclass_json
@dataclass
class DescribeOrderableReplicationInstancesResponse:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    orderable_replication_instances: Optional[List[orderablereplicationinstance.OrderableReplicationInstance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderableReplicationInstances' }})
    
