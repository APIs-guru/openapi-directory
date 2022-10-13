from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import securityprofiletarget


@dataclass_json
@dataclass
class ListTargetsForSecurityProfileResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    security_profile_targets: Optional[List[securityprofiletarget.SecurityProfileTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProfileTargets' }})
    
