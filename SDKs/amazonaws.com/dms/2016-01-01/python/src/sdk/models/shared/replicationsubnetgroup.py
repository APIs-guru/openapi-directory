from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subnet


@dataclass_json
@dataclass
class ReplicationSubnetGroup:
    replication_subnet_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationSubnetGroupDescription' }})
    replication_subnet_group_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationSubnetGroupIdentifier' }})
    subnet_group_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetGroupStatus' }})
    subnets: Optional[List[subnet.Subnet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subnets' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
