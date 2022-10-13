from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateRepositoryDescriptionInput:
    repository_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryDescription' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
