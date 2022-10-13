from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import branch


@dataclass_json
@dataclass
class ListBranchesResult:
    branches: List[branch.Branch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branches' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
