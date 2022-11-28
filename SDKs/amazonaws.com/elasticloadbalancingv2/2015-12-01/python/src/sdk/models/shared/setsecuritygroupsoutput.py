from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class SetSecurityGroupsOutput:
    security_group_ids: Optional[List[str]] = field(default=None)
    
