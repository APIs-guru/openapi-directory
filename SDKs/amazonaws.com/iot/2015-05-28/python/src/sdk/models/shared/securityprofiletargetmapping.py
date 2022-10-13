from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import securityprofileidentifier
from . import securityprofiletarget


@dataclass_json
@dataclass
class SecurityProfileTargetMapping:
    security_profile_identifier: Optional[securityprofileidentifier.SecurityProfileIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProfileIdentifier' }})
    target: Optional[securityprofiletarget.SecurityProfileTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
