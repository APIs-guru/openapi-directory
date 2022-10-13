from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import replicationsubnetgroup


@dataclass_json
@dataclass
class CreateReplicationSubnetGroupResponse:
    replication_subnet_group: Optional[replicationsubnetgroup.ReplicationSubnetGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationSubnetGroup' }})
    
