from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateRepositoryInput:
    repository_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryDescription' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
