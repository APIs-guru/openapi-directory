from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import branch


@dataclass_json
@dataclass
class DeleteBranchResult:
    branch: branch.Branch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    
