from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import assignpublicip_enum


@dataclass_json
@dataclass
class NetworkConfiguration:
    assign_public_ip: Optional[assignpublicip_enum.AssignPublicIPEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignPublicIp' }})
    
