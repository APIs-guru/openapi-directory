from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateBranchInput:
    branch_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchName' }})
    commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitId' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
