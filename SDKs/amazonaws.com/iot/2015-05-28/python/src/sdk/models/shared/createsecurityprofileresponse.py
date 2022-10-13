from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateSecurityProfileResponse:
    security_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProfileArn' }})
    security_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProfileName' }})
    
