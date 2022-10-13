from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteBranchInput:
    branch_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchName' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
