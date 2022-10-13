from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import groupinformation


@dataclass_json
@dataclass
class ListGroupsResponse:
    groups: Optional[List[groupinformation.GroupInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Groups' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
