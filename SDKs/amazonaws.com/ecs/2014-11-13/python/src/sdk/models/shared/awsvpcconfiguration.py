from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import assignpublicip_enum


@dataclass_json
@dataclass
class AwsVpcConfiguration:
    assign_public_ip: Optional[assignpublicip_enum.AssignPublicIPEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignPublicIp' }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityGroups' }})
    subnets: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnets' }})
    
