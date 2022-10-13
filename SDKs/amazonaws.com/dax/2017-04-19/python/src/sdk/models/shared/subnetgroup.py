from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subnet


@dataclass_json
@dataclass
class SubnetGroup:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    subnet_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetGroupName' }})
    subnets: Optional[List[subnet.Subnet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subnets' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
