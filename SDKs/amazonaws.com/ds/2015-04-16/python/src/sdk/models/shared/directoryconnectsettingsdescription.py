from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DirectoryConnectSettingsDescription:
    availability_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZones' }})
    connect_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectIps' }})
    customer_user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerUserName' }})
    security_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupId' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
