from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VpcDestinationConfiguration:
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityGroups' }})
    subnet_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetIds' }})
    vpc_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcId' }})
    
