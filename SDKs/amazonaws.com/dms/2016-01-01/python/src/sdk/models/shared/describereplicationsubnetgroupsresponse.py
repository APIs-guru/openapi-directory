from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicationsubnetgroup


@dataclass_json
@dataclass
class DescribeReplicationSubnetGroupsResponse:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    replication_subnet_groups: Optional[List[replicationsubnetgroup.ReplicationSubnetGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationSubnetGroups' }})
    
