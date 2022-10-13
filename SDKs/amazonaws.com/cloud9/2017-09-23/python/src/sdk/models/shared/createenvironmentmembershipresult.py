from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import environmentmember


@dataclass_json
@dataclass
class CreateEnvironmentMembershipResult:
    membership: environmentmember.EnvironmentMember = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membership' }})
    
