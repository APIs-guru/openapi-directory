from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MergeBranchesByFastForwardInput:
    destination_commit_specifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationCommitSpecifier' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    source_commit_specifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCommitSpecifier' }})
    target_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetBranch' }})
    
