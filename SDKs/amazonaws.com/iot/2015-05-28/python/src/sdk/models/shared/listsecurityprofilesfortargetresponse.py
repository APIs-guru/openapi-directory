from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import securityprofiletargetmapping


@dataclass_json
@dataclass
class ListSecurityProfilesForTargetResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    security_profile_target_mappings: Optional[List[securityprofiletargetmapping.SecurityProfileTargetMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProfileTargetMappings' }})
    
