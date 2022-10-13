from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteReplicationSubnetGroupMessage:
    replication_subnet_group_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationSubnetGroupIdentifier' }})
    
