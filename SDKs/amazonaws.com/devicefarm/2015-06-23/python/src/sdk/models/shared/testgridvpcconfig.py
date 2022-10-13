from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TestGridVpcConfig:
    security_group_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityGroupIds' }})
    subnet_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetIds' }})
    vpc_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcId' }})
    
