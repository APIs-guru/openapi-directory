from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subnetgroup


@dataclass_json
@dataclass
class DescribeSubnetGroupsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    subnet_groups: Optional[List[subnetgroup.SubnetGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetGroups' }})
    
