from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import environmentmember


@dataclass_json
@dataclass
class UpdateEnvironmentMembershipResult:
    membership: Optional[environmentmember.EnvironmentMember] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membership' }})
    
