from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import environmentmember


@dataclass_json
@dataclass
class DescribeEnvironmentMembershipsResult:
    memberships: Optional[List[environmentmember.EnvironmentMember]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberships' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
