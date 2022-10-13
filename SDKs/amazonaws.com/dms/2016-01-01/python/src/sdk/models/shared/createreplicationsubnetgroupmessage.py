from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateReplicationSubnetGroupMessage:
    replication_subnet_group_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationSubnetGroupDescription' }})
    replication_subnet_group_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationSubnetGroupIdentifier' }})
    subnet_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
