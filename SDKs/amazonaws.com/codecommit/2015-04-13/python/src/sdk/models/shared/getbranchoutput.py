from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import branchinfo


@dataclass_json
@dataclass
class GetBranchOutput:
    branch: Optional[branchinfo.BranchInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    
