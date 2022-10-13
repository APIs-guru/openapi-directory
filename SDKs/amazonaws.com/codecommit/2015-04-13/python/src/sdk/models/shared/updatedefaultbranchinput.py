from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateDefaultBranchInput:
    default_branch_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultBranchName' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
