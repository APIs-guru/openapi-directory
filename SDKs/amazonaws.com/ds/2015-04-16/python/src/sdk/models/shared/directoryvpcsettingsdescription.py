from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DirectoryVpcSettingsDescription:
    availability_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZones' }})
    security_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupId' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
