from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import fargateprofile


@dataclass_json
@dataclass
class CreateFargateProfileResponse:
    fargate_profile: Optional[fargateprofile.FargateProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fargateProfile' }})
    
