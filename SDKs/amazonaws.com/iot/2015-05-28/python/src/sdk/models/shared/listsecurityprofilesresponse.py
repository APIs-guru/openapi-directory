from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import securityprofileidentifier


@dataclass_json
@dataclass
class ListSecurityProfilesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    security_profile_identifiers: Optional[List[securityprofileidentifier.SecurityProfileIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProfileIdentifiers' }})
    
