from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchGetCommitsInput:
    commit_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitIds' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
