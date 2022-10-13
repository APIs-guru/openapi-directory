from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instanceprofile


@dataclass_json
@dataclass
class CreateInstanceProfileResult:
    instance_profile: Optional[instanceprofile.InstanceProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceProfile' }})
    
