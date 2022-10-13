from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModifyReplicationSubnetGroupMessage:
    replication_subnet_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationSubnetGroupDescription' }})
    replication_subnet_group_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationSubnetGroupIdentifier' }})
    subnet_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    
