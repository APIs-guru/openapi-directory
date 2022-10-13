from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PrivateLinkConfig:
    private_link_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivateLinkEndpoint' }})
    security_group_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupArns' }})
    subnet_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetArns' }})
    vpc_endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcEndpointId' }})
    
