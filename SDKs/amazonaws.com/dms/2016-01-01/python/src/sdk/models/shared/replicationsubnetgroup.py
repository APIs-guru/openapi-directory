from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicationSubnetGroup:
    r"""ReplicationSubnetGroup
    Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroups</code> operation.
    """
    
    replication_subnet_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationSubnetGroupDescription') }})
    replication_subnet_group_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationSubnetGroupIdentifier') }})
    subnet_group_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetGroupStatus') }})
    subnets: Optional[List[Subnet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subnets') }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
