from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GitHubLocation:
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitId' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    
