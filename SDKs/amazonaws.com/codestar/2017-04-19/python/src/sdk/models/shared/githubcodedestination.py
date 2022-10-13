from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GitHubCodeDestination:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    issues_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuesEnabled' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    private_repository: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateRepository' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
