from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import assignpublicip_enum


@dataclass_json
@dataclass
class AwsVpcConfiguration:
    assign_public_ip: Optional[assignpublicip_enum.AssignPublicIPEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignPublicIp' }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroups' }})
    subnets: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subnets' }})
    
